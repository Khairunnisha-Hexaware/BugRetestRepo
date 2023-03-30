using BackendDotnet.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BackendDotnet.Business.Interfaces
{
    public interface INanoScienceAndTechnologyService
    {      
        IEnumerable<NanoScienceAndTechnology> GetAll();
        NanoScienceAndTechnology Save(NanoScienceAndTechnology nanoscienceandtechnology);
        NanoScienceAndTechnology Update(int id, NanoScienceAndTechnology nanoscienceandtechnology);
        bool Delete(int id);
        NanoScienceAndTechnology  GetById(int id);

    }
}
