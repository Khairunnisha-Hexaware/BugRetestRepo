using System;
using System.Collections.Generic;
using System.Text;
using NUnit.Framework;
using NSubstitute;
using Shouldly;
using Microsoft.AspNetCore.Mvc;
using BackendDotnet.Entities.Entities;

namespace BackendDotnet.Test.Api.NanoScienceAndTechnologyControllerSpec
{
    public class When_getting_all_nanoscienceandtechnology : UsingNanoScienceAndTechnologyControllerSpec
    {
        private ActionResult<IEnumerable<NanoScienceAndTechnology>> _result;

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
            _nanoscienceandtechnologyService.GetAll().Returns(_all_nanoscienceandtechnology);
        }
        public override void Because()
        {
            _result = subject.Get();
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _nanoscienceandtechnologyService.Received(1).GetAll();

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<List<NanoScienceAndTechnology>>();

            List<NanoScienceAndTechnology> resultList = resultListObject as List<NanoScienceAndTechnology>;

            resultList.Count.ShouldBe(1);

            resultList.ShouldBe(_all_nanoscienceandtechnology);
        }
    }
}
