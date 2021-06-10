import { DotsHorizontalIcon } from "@heroicons/react/outline";

function About() {
  return (
    <div className="m-auto w-full mw-1000">
      <h1 className="text-center font-black text-2xl md:text-4xl">About Us</h1>
      <p>
        <DotsHorizontalIcon className="w-16 h-16 m-auto font-black text-gray-300" />
      </p>
      <img src={process.env.PUBLIC_URL + 'asset/team-member.png'} alt="" className="rounded-2xl" />
      <div className="xl:mx-28 lg:mx-20 md:mx-10 mt-10 text-lg md:text-xl leading-7">
        {/* content. todo replace */}
        <p className="mb-10">Hi there,</p>
        <p className="mb-10">We are a full-stack developer team from Viet Nam. Please contact us to work at <b>morethan.team@gmail.com</b></p>
        <p className="mb-10">Team members: <br />
          <ul className="ml-10 list-disc">
            <li className="mb-5"><a className="underline" href="https://www.facebook.com/">Phuc Bui</a> : .Net Developer</li>
            <li className="mb-5"><a className="underline" href="https://www.facebook.com/">Quoc Tran</a> : .Net Developer</li>
            <li className="mb-5"><a className="underline" href="https://www.facebook.com/">Luu Huynh</a> : .React Developer</li>
            <li className="mb-5"><a className="underline" href="https://www.facebook.com/">Binh Nguyen</a> : .Net Developer</li>
          </ul>
        </p>
        {/* End content */}
      </div>
    </div>
  );
}

export { About };
