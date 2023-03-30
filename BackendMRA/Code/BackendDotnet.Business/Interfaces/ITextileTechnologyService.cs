using BackendDotnet.Entities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BackendDotnet.Business.Interfaces
{
    public interface ITextileTechnologyService
    {      
        IEnumerable<TextileTechnology> GetAll();
        TextileTechnology Save(TextileTechnology textiletechnology);
        TextileTechnology Update(int id, TextileTechnology textiletechnology);
        bool Delete(int id);
        TextileTechnology  GetById(int id);

    }
}
