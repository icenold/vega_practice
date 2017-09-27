using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using vega.Models;
using Microsoft.AspNetCore.Hosting;

namespace vega.Controllers
{
    public class HomeController : Controller
    {
        private IHostingEnvironment _hostingEnvironment;
        public HomeController(IHostingEnvironment environment)
        {
            this._hostingEnvironment = environment;
        }
        public IActionResult Index()
        {
            var htmlPath = System.IO.Path.Combine(this._hostingEnvironment.WebRootPath, "app-frontend/index.html");
            var htmlString = System.IO.File.ReadAllText(htmlPath);
            return Content(htmlString, "text/html");
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
