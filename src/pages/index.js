import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { Link } from 'gatsby'
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';

import { HeroImage, Workshops, GlobalOrientation, Marketing } from '../svg/SvgImages'
import { ProactiveIcon, InclusiveIcon, CollaborativeIcon } from '../svg/Motifs' 

export default () => (
  <Layout>
    <section className="pt-10 md:pt-20 pb-20 md:pb-20">
      <div className="container mx-auto px-8 lg:flex">
        <div className="lg:mt-12 text-center lg:text-left lg:w-1/2">
          <h1 className="text-6xl lg:text-6xl xl:text-6xl font-raleway font-bold leading-none">
            Welcome <br /> to  Skillbot
          </h1>
          <p className="font-montserrat text-3xl lg:text-4xl mt-6 font-light">
            Where the future of work <br /> is the future of education
          </p>
          <p className="mt-6 text-gray-600 font-montserrat">Get started with internships.</p>
          <p className="mt-2 md:mt-6 text-xl font-bold font-raleway">
            <Button className="rounded-full" size="lg" toPage='/internships'>Know More</Button>
          </p>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-6 lg:w-1/2">
          <HeroImage/>
        </div>
      </div>
    </section>
    <section id="about" className="mt-16 pt-10 pb-16 lg:pb-10 lg:pt-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">What we do</h2>
        <div className="mt-6 p-6 sm:p-6 text-3xl">
          <p>We provide educational stratergies which satisfy the changing needs of the higher education sector.</p>
        </div>
      </div>
    </section>
    <section id="what" className="mt-25 pt-10 lg:pb-20 lg:pt-20 bg-primary-lighter">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-semibold">What we are</h2>
        <div className="mt-6 p-6 sm:p-6 text-2xl">
          <p>We aim to create a strategic development process that is Proactive, Inclusive and Collaborative.</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-white">
              <p className="m-6 p-6 w-32 m-auto">
                <ProactiveIcon />
              </p>
              <p className="font-semibold text-xl">Proactive</p>
              <p className="mt-4">
                We analyse the needs of the industry and nature of higher education demands along with research and stakeholder data.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-white">
              <p className="m-6 p-6 w-32 m-auto">
                <InclusiveIcon />
              </p>
              <p className="font-semibold text-xl">Inclusive</p>
              <p className="mt-4">
                We will deliver the most general-to-specific skill set which suits all students with different inclinations and, from different domains.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8 bg-white">
              <p className="m-6 p-6 w-32 m-auto">
                <CollaborativeIcon />
              </p>
              <p className="font-semibold text-xl">Collaborative</p>
              <p className="mt-4">
                We ensure that students collaborate with professionals in the industry through projects, internships and research work.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">Workshops, Courses and Internships</h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            We will facilitate better understanding of industry need through, Skill Development Workshops, Faculty Development Workshops, Internships and Industry opportunities to help students and faculty members understand the changing requirements and adapt to the challenges of the real world.
          </p>
        </div>
      }
      secondarySlot={<Workshops/>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Global Orientation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Through induction programmes, guest lectures and international tie-ups. Using experience, reach and networking built over years of trust, collaboration and in the spirit of continuous learning.
          </p>
        </div>
      }
      secondarySlot={<GlobalOrientation/>}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h3 className="text-3xl font-semibold leading-tight">
            Data Analysis and Performance Optimzation
          </h3>
          <p className="mt-8 text-xl font-light leading-relaxed">
            As an education startergry platform, we monitor and provide analysis on the most recent trends in the industry and provide insight to students and educational institutions to achieve our main goal talent transformation.
          </p>
        </div>
      }
      secondarySlot={<Marketing/>}
    />
  </Layout>
);
