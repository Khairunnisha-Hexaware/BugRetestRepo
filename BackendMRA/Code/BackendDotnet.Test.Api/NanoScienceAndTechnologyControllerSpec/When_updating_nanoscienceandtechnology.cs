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
    public class When_updating_nanoscienceandtechnology : UsingNanoScienceAndTechnologyControllerSpec
    {
        private ActionResult<NanoScienceAndTechnology > _result;
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

            _nanoscienceandtechnologyService.Update(1, _nanoscienceandtechnology).Returns(_nanoscienceandtechnology);
            
        }
        public override void Because()
        {
            _result = subject.Update(1, _nanoscienceandtechnology);
        }

        [Test]
        public void Request_is_routed_through_service()
        {
            _nanoscienceandtechnologyService.Received(1).Update(1, _nanoscienceandtechnology);

        }

        [Test]
        public void Appropriate_result_is_returned()
        {
            _result.Result.ShouldBeOfType<OkObjectResult>();

            var resultListObject = (_result.Result as OkObjectResult).Value;

            resultListObject.ShouldBeOfType<NanoScienceAndTechnology>();

            var resultList = resultListObject as NanoScienceAndTechnology;

            resultList.ShouldBe(_nanoscienceandtechnology);
        }
    }
}
