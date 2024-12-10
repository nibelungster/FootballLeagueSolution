using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Net.Http;
using System.Net.Security;
using System.Text.Json;
using System.Net.Http.Headers;

namespace FootballBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FootballLeagueController : ControllerBase
    {
        private readonly ILogger<FootballLeagueController> _logger;
        private readonly IHttpClientFactory _httpClientFactory;

        public FootballLeagueController(IHttpClientFactory httpClientFactory, ILogger<FootballLeagueController> logger)
        {
            _logger = logger;
            _httpClientFactory = httpClientFactory;
        }

        [HttpGet(Name = "GetFootballLeague")]
        public async Task<JsonResult> Get()
        {
            using HttpClient client = _httpClientFactory.CreateClient();

            try
            {
                client.BaseAddress = new Uri("https://api.football-data.org/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Add("x-auth-token", "89ca0a4e77694d4b9cbefc7777d7577b");
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var response = await client.GetAsync("v4/competitions/PPL/matches?dateFrom=2024-12-01&dateTo=2024-12-07");

                return new JsonResult(await response.Content.ReadAsStringAsync());
            }
            catch (Exception ex)
            {
                _logger.LogError("Error getting something fun to say: {Error}", ex);
            }

            return new JsonResult(String.Empty);
        }
    }
}
