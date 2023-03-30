using NSubstitute;
using BackendDotnet.Test.Framework;
using BackendDotnet.Business.Services;
using BackendDotnet.Data.Interfaces;

namespace BackendDotnet.Test.Business.NanoScienceAndTechnologyServiceSpec
{
    public abstract class UsingNanoScienceAndTechnologyServiceSpec : SpecFor<NanoScienceAndTechnologyService>
    {
        protected INanoScienceAndTechnologyRepository _nanoscienceandtechnologyRepository;

        public override void Context()
        {
            _nanoscienceandtechnologyRepository = Substitute.For<INanoScienceAndTechnologyRepository>();
            subject = new NanoScienceAndTechnologyService(_nanoscienceandtechnologyRepository);

        }

    }
}
