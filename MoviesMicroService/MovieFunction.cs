using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.Azure.Cosmos;
using MoviesMicroService.Models;
using System.Linq;
using System.Collections.Generic;

namespace MoviesMicroService
{
    public class MovieFunction
    {
        private readonly Container movieContainer;

        public MovieFunction(Container movieContainer)
        {
            this.movieContainer = movieContainer;
        }

        [FunctionName("GetMovies")]
        public async Task<IActionResult> Run(
             [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
             ILogger log)
        {
            try
            {
                log.LogInformation("Movie function started execution");
                var responseMessage = movieContainer.GetItemLinqQueryable<Movie>(true).AsEnumerable().ToList();

                return new OkObjectResult(responseMessage);
            }
            catch (Exception e)
            {
                log.LogInformation(" Exception while executing Movie function ");
                return new BadRequestResult();
            }
        }

        [FunctionName("GetMovieById")]
        public async Task<IActionResult> GetMovieById(
         [HttpTrigger(AuthorizationLevel.Function, "get", Route = null)] HttpRequest req,
         ILogger log)
        {
            try
            {
                log.LogInformation("Movie function started execution");
                string id = req.Query["id"];
                Movie movie = movieContainer.GetItemLinqQueryable<Movie>(true)
                      .Where(b => b.imdbID == id)
                      .AsEnumerable()
                      .FirstOrDefault();
                List<Movie> movies = new List<Movie>();
                movies.Add(movie);

                return new OkObjectResult(movies);
            }
            catch (Exception e)
            {

                log.LogInformation(" Exception while executing Movie function ");
                return new BadRequestResult();
            }
        }
    }
}
