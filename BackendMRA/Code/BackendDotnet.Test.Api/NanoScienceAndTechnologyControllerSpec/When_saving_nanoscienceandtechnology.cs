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
    public class When_saving_nanoscienceandtechnology : UsingNanoScienceAndTechnologyControllerSpec
    {
        private ActionResult<NanoScienceAndTechnology> _result;

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

            _nanoscienceandtechnologyService.Save(_nanoscienceandtechnology).Returns(_nanoscienceandtechnology);
        }
        public override void Because()
        {
            _result = subject.Save(_nanoscienceandtechnology);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _nanoscienceandtechnologyService.Received(1).Save(_nanoscienceandtechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<NanoScienceAndTechnology>();

            var resultList = (NanoScienceAndTechnology)resultListObject;

            resultList.ShouldBe(_nanoscienceandtechnology);
        }
    }
}
