using System.Collections.Generic;
using BackendDotnet.Business.Interfaces;
using BackendDotnet.Entities.Entities;
using Microsoft.AspNetCore.Mvc;

namespace BackendDotnet.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TextileTechnologyController : ControllerBase
    {
       readonly ITextileTechnologyService _TextileTechnologyService;
        public TextileTechnologyController(ITextileTechnologyService TextileTechnologyService)
        {
            _TextileTechnologyService = TextileTechnologyService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<TextileTechnology>> Get()
        {
            return Ok(_TextileTechnologyService.GetAll());
        }

        [HttpPost]
        public ActionResult<TextileTechnology> Save(TextileTechnology TextileTechnology)
        {
            return Ok(_TextileTechnologyService.Save(TextileTechnology));

        }

        [HttpPut("{id:int}")]
        public ActionResult<TextileTechnology> Update(int id, TextileTechnology TextileTechnology)
        {
            return Ok(_TextileTechnologyService.Update(id, TextileTechnology));

        }

        [HttpDelete("{id:int}")]
        public ActionResult<bool> Delete(int id)
        {
            return Ok(_TextileTechnologyService.Delete(id));

        }
        [HttpGet("{id:int}")]
        public ActionResult<TextileTechnology> GetById(int id)
        {
            return Ok(_TextileTechnologyService.GetById(id));
        }

    }
}
