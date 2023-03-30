using System.Collections.Generic;
using BackendDotnet.Business.Interfaces;
using BackendDotnet.Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BackendDotnet.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class NanoScienceAndTechnologyController : ControllerBase
    {
       readonly INanoScienceAndTechnologyService _NanoScienceAndTechnologyService;
        public NanoScienceAndTechnologyController(INanoScienceAndTechnologyService NanoScienceAndTechnologyService)
        {
            _NanoScienceAndTechnologyService = NanoScienceAndTechnologyService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<NanoScienceAndTechnology>> Get()
        {
            return Ok(_NanoScienceAndTechnologyService.GetAll());
        }

        [HttpPost]
        public ActionResult<NanoScienceAndTechnology> Save(NanoScienceAndTechnology NanoScienceAndTechnology)
        {
            return Ok(_NanoScienceAndTechnologyService.Save(NanoScienceAndTechnology));

        }

        [HttpPut("{id:int}")]
        public ActionResult<NanoScienceAndTechnology> Update(int id, NanoScienceAndTechnology NanoScienceAndTechnology)
        {
            return Ok(_NanoScienceAndTechnologyService.Update(id, NanoScienceAndTechnology));

        }

        [HttpDelete("{id:int}")]
        public ActionResult<bool> Delete(int id)
        {
            return Ok(_NanoScienceAndTechnologyService.Delete(id));

        }
        [HttpGet("{id:int}")]
        public ActionResult<NanoScienceAndTechnology> GetById(int id)
        {
            return Ok(_NanoScienceAndTechnologyService.GetById(id));
        }

    }
}
