using BackendDotnet.Entities.Entities;


namespace BackendDotnet.Data.Interfaces
{
    public interface INanoScienceAndTechnologyRepository : IGetById<NanoScienceAndTechnology>, IGetAll<NanoScienceAndTechnology>, ISave<NanoScienceAndTechnology>, IUpdate<NanoScienceAndTechnology>, IDelete<int>
    {
    }
}
