using BackendDotnet.Entities.Entities;


namespace BackendDotnet.Data.Interfaces
{
    public interface ITextileTechnologyRepository : IGetById<TextileTechnology>, IGetAll<TextileTechnology>, ISave<TextileTechnology>, IUpdate<TextileTechnology>, IDelete<int>
    {
    }
}
