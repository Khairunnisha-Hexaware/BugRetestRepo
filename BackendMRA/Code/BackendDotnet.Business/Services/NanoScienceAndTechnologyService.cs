using BackendDotnet.Business.Interfaces;
using BackendDotnet.Data.Interfaces;
using BackendDotnet.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BackendDotnet.Business.Services
{
    public class NanoScienceAndTechnologyService : INanoScienceAndTechnologyService
    {
       readonly INanoScienceAndTechnologyRepository _NanoScienceAndTechnologyRepository;

        public NanoScienceAndTechnologyService(INanoScienceAndTechnologyRepository NanoScienceAndTechnologyRepository)
        {
           this._NanoScienceAndTechnologyRepository = NanoScienceAndTechnologyRepository;
        }
        public IEnumerable<NanoScienceAndTechnology> GetAll()
        {
            return _NanoScienceAndTechnologyRepository.GetAll();
        }

        public NanoScienceAndTechnology Save(NanoScienceAndTechnology nanoscienceandtechnology)
        {
            _NanoScienceAndTechnologyRepository.Save(nanoscienceandtechnology);
            return nanoscienceandtechnology;
        }

        public NanoScienceAndTechnology Update(int id,NanoScienceAndTechnology nanoscienceandtechnology)
        {
            return _NanoScienceAndTechnologyRepository.Update(id, nanoscienceandtechnology);
        }

        public bool Delete(int id)
        {
            return _NanoScienceAndTechnologyRepository.Delete(id);
        }
        public NanoScienceAndTechnology GetById(int id)
        {
            return _NanoScienceAndTechnologyRepository.GetById(id);
        }
    }
}
