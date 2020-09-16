
using Microsoft.Azure.Cosmos;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using MoviesMicroService;
using MoviesMicroService.Models;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.ComTypes;

namespace unit
{
    [TestClass]
    public class functiontesMoviesFunctionTests
    {

        private Mock<Container> movieContainer;


        private MovieFunction moviefunction;

        [TestInitialize]
        public void Initialize()
        {
            this.movieContainer = new Mock<Container>();
            this.moviefunction = new MovieFunction(this.movieContainer.Object);
        }

        [TestMethod]
        public void GetMovies_ShouldReturn_AllMovies()
        {
            // Facing some issue while mocking 

            this.movieContainer.Setup(a => a.GetItemLinqQueryable<Movie>()(new EnumerableQuery<movie>(this.SetupMocks())));

            this.movieContainer.Verify(a => a.GetItemLinqQueryable<Movie>(true), Times.Once);

        }

        private List<Movie> SetupMocks()
        {

            return new List<Movie>
            {
                new Movie{
                imdbID = "1212333",
                Title = "BB"
                }
            };
        }



    }
}
