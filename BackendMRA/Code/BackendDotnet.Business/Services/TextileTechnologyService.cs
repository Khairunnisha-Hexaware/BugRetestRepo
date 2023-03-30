using BackendDotnet.Business.Interfaces;
using BackendDotnet.Data.Interfaces;
using BackendDotnet.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BackendDotnet.Business.Services
{
    public class TextileTechnologyService : ITextileTechnologyService
    {
       readonly ITextileTechnologyRepository _TextileTechnologyRepository;

        public TextileTechnologyService(ITextileTechnologyRepository TextileTechnologyRepository)
        {
           this._TextileTechnologyRepository = TextileTechnologyRepository;
        }
        public IEnumerable<TextileTechnology> GetAll()
        {
            return _TextileTechnologyRepository.GetAll();
        }

        public TextileTechnology Save(TextileTechnology textiletechnology)
        {
            _TextileTechnologyRepository.Save(textiletechnology);
            return textiletechnology;
        }

        public TextileTechnology Update(int id,TextileTechnology textiletechnology)
        {
            return _TextileTechnologyRepository.Update(id, textiletechnology);
        }

        public bool Delete(int id)
        {
            return _TextileTechnologyRepository.Delete(id);
        }
        public TextileTechnology GetById(int id)
        {
            return _TextileTechnologyRepository.GetById(id);
        }
    }
}
