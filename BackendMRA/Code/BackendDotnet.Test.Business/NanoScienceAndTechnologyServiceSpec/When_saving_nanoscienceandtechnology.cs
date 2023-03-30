using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using BackendDotnet.Entities.Entities;

namespace BackendDotnet.Test.Business.NanoScienceAndTechnologyServiceSpec
{
    public class When_saving_nanoscienceandtechnology : UsingNanoScienceAndTechnologyServiceSpec
    {
        private NanoScienceAndTechnology _result;

        private NanoScienceAndTechnology _nanoscienceandtechnology;

        public override void Context()
        {
            base.Context();

            _nanoscienceandtechnology = new NanoScienceAndTechnology
            {
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                courseduration = "courseduration",
                coursechedule = "coursechedule",
                coursefee = "coursefee",
                mobilenumber = "mobilenumber",
                dateofjoining = "dateofjoining"
            };

            _nanoscienceandtechnologyRepository.Save(_nanoscienceandtechnology).Returns(true);
        }
        public override void Because()
        {
            _result = subject.Save(_nanoscienceandtechnology);
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _nanoscienceandtechnologyRepository.Received(1).Save(_nanoscienceandtechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<NanoScienceAndTechnology>();

            _result.ShouldBe(_nanoscienceandtechnology);
        }
    }
}
