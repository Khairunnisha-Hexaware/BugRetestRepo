namespace BackendDotnet.Data.Interfaces
{
    public interface IDelete<in T>
    {
        bool Delete(T id);
    }
}
