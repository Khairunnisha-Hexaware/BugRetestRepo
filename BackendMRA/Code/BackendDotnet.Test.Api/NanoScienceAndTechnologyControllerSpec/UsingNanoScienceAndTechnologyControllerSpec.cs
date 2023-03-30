using NSubstitute;
using BackendDotnet.Test.Framework;
using BackendDotnet.Api.Controllers;
using BackendDotnet.Business.Interfaces;


namespace BackendDotnet.Test.Api.NanoScienceAndTechnologyControllerSpec
{
    public abstract class UsingNanoScienceAndTechnologyControllerSpec : SpecFor<NanoScienceAndTechnologyController>
    {
        protected INanoScienceAndTechnologyService _nanoscienceandtechnologyService;

        public override void Context()
        {
            _nanoscienceandtechnologyService = Substitute.For<INanoScienceAndTechnologyService>();
            subject = new NanoScienceAndTechnologyController(_nanoscienceandtechnologyService);

        }

    }
}
