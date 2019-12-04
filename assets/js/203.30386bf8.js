(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{150:function(e,t,a){"use strict";a.r(t);var o=a(0),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"polaris-–-transportation-systems-modeling-suite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polaris-–-transportation-systems-modeling-suite"}},[e._v("#")]),e._v(" POLARIS – Transportation Systems Modeling Suite")]),e._v(" "),a("p",[a("a",{attrs:{href:"http://polaris.es.anl.gov",target:"_blank",rel:"noopener noreferrer"}},[e._v("polaris.es.anl.gov"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"project-overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project-overview"}},[e._v("#")]),e._v(" Project Overview")]),e._v(" "),a("p",[e._v("The POLARIS suite is developed at Argonne National Laboratory under contract with the Federal Highway Administration (FHWA). The work encompasses the development of new and improved tools for creating integrated, interoperable, and extensible model systems to address new transportation management and operations policies. The Transportation Research and Analysis Computing Center (TRACC) are pursuing three major research directions: agent-based modeling, infrastructure design for traffic management centers and intelligent transportation systems (ITS), and software engineering techniques.\\")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/tPHKKwkoprk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("h2",{attrs:{id:"background"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),a("p",[e._v("The work on the POLARIS project grew from the previous work done at Argonne for the last few years. While helping developing and supporting dozens transportation models on the TRACC’s cluster computer and collaborating with state Dots, MPOs and academia it became obvious that model integration is the item that requires a large amount of time and other resources to accomplish. FHWA’s office of planning had a vision to develop a prototype (proof of concept) of an integrated model that would allow having different transportation models (traffic flow, intersection control, demand generation, operations, etc.) to interoperate and form an integrated model. At the beginning of the project the Argonne team organized a one day workshop on integrated transportation models (http://tinyurl.com/orac4zh) and gathered transportation engineers and scientists who are currently on the frontier of the developing and implementing integrated models. It helped the team to refine the technical scope of the project and identify ways to tackle the problem. The agent-based modeling technique was chosen to be used for the new model. Argonne has a long history of successfully developing agent-based models for political and social processes, logistics, urban dynamics, business applications, geographical systems and economics. The experience accumulated at Argonne helped the team to design the simulation framework in which traveler agents have behavioral responses and are sensitive to the actions of other agents, which may range from other travelers, to system managers and smart infrastructure, or even to the overall system performance.")]),e._v(" "),a("h2",{attrs:{id:"purpose-and-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#purpose-and-function"}},[e._v("#")]),e._v(" Purpose and Function")]),e._v(" "),a("p",[e._v("The focus of the POLARIS suite is to support the evaluation of relevant program issues at regional scale, notably planning for operations and emerging vehicle and roadside technologies. The suite is designed as a set of libraries that can interoperate and be used to develop an integrated transportation model. Another important aspect of software engineering design addressed in POLARIS is parallelism. The software can take advantage of modern multi-core processor architectures as well as cluster computers. Efficient implementation of the algorithms in C++ along with parallelism allow to run a large scale model as fast as 12:1(real time: simulation time) ratio.\\")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/PnThLoEFL",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("p",[e._v("==Implementation==\nThe POLARIS framework ha been used to develop an activity-based travel demand model. Travel demand is estimated in POLARIS by using an activity-based demand model. The demand model is agent based, meaning that the individual agent actions and behaviors are simulated. The demand behaviors modeled include time-dependent activity generation, activity attribute planning and replanning, and a detailed activity scheduling model, which resolves schedule conflicts and maintains a consistent daily schedule for the agent. The demand components, including activity generation and activity planning, are also responsive to network and traffic management events, which can result in agent replanning. The demand components implemented in the POLARIS derive from previous work in modeling activity-planning and scheduling behaviors found in the development of the ADAPTS (Agent-based Dynamic Activity Planning and Travel Scheduling) model.\\")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/R96HgRu2D4g",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("p",[e._v("The network model component in POLARIS is a one-shot simulation-based dynamic traffic assignment model that includes the following: (i) a route choice model, (ii) a route generation model, and (ii) a mesoscopic traffic simulation model. Each of these models is implemented as a collection of POLARIS agents and utilizes the discrete event engine to coordinate execution scheduling and run efficiently. We use two types of route choice model for one-shot DTA, one is route choice based on pre-trip prevailing traffic information; the other is a bounded rationality based en-route switching model for modeling travelers adjust their route using real-time traffic information. We have a future plan to incorporate the DUE approach for an iterative DTA model.\\")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/zb0MTQv1TiI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v("\nThe agents related to the network model are seamlessly integrated with the demand model agents by providing traffic information for travelers taking demand side actions. The ITS model agents are incorporated by publishing sensor information to the TMC for making traffic operations and control decisions. In turn, the demand side actions and TMC’s operations and control decisions also impact the traveler’s route choice and traffic flow pattern.\\\n"),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/zjqbLChd5L8",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("p",[e._v("==Applications==\nCurrently, the major application of the POLARIS framework is the evaluation of ITS and management benefits. For that purpose, three components in the POLARIS were developed on top of the demand and network components: network events, ITS infrastructure, and traffic manager agent (TMA). Currently, the following types of ITS components are supported: variable message sign (VMS), highway advisory radio (HAR), tow truck dispatch, open hard shoulder sign, and in-road sensor. Each HAR and VMS can display/broadcast a single message associated with a network event. Five types of network events can be modeled by the network events manager: weather, accidents, congestion, lane closure, and travel time. Each event has spatial information about the area affected, start/end time, and event-specific attributes. For example, for a weather event the user can specify type (snow, rain, or fog), level of precipitation, visibility, asphalt conditions, etc..")]),e._v(" "),a("p",[e._v("The performance of the transportation system and the benefits of ITS and traffic management need to be evaluated under many different assumptions. Treating weather, special events, road construction, and time of day as random variables leads to a large number of possible scenarios that need to be evaluated. It is error prone and requires significant amount of time to hand craft ITS response strategies to all possible scenarios. Thus, as a part of the framework an automated traffic manager agent is being developed. The goal of this agent is to monitor the status of the transportation network (speed, travel times, etc.) as well as network-related events (weather, incidents, etc.) and decide on a response that would mitigate unusual congestion levels on the network. This aspect of the model is intended to allow planning agencies to analyze the benefits of different network operational improvements.\\")]),e._v(" "),a("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/hH1X6RGmoVw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),e._v(" "),a("p",[e._v("Another component provided in the base POLARIS framework (i.e., independent of any specific model implementation) is the scenario manager, a set of tools used to define, execute in parallel, and analyze various traffic simulation scenarios in terms of conditions such as weather, demand, incidents, and so on. The scenario manager allows the modeler to account for non-typical conditions (inclement weather, special events, and incidents) in evaluating the model response. Furthermore, it allows for the computation of MOEs based on the expected distribution of simulated scenarios. These features are particularly useful for benefit/cost analysis of ITS or other transportation improvement projects, where a significant amount of the expected benefits is incurred for non-typical conditions.")]),e._v(" "),a("h2",{attrs:{id:"polaris-project-website"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polaris-project-website"}},[e._v("#")]),e._v(" POLARIS Project Website")]),e._v(" "),a("p",[e._v("For more information and access to the POLARIS codebase, see the Polaris project website at: "),a("a",{attrs:{href:"http://polaris.es.anl.gov",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://polaris.es.anl.gov"),a("OutboundLink")],1)]),e._v(" "),a("hr")])}),[],!1,null,null,null);t.default=n.exports}}]);