using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using BackendDotnet.Entities.Entities;

namespace BackendDotnet.Test.Business.NanoScienceAndTechnologyServiceSpec
{
    public class When_getting_all_nanoscienceandtechnology : UsingNanoScienceAndTechnologyServiceSpec
    {
        private IEnumerable<NanoScienceAndTechnology> _result;

        private IEnumerable<NanoScienceAndTechnology> _all_nanoscienceandtechnology;
        private NanoScienceAndTechnology _nanoscienceandtechnology;

        public override void Context()
        {
            base.Context();

            _nanoscienceandtechnology = new NanoScienceAndTechnology{
                coursename = "coursename",
                coursedescription = "coursedescription",
                coursetype = "coursetype",
                courseduration = "courseduration",
                coursechedule = "coursechedule",
                coursefee = "coursefee",
                mobilenumber = "mobilenumber",
                dateofjoining = "dateofjoining"
            };

            _all_nanoscienceandtechnology = new List<NanoScienceAndTechnology> { _nanoscienceandtechnology};
            _nanoscienceandtechnologyRepository.GetAll().Returns(_all_nanoscienceandtechnology);
        }
        public override void Because()
        {
            _result = subject.GetAll();
        }

        [Test]
        public void Request_is_routed_through_repository()
        {
            _nanoscienceandtechnologyRepository.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.ShouldBeOfType<List<NanoScienceAndTechnology>>();

            List<NanoScienceAndTechnology> resultList = _result as List<NanoScienceAndTechnology>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_nanoscienceandtechnology);
        }
    }
}
