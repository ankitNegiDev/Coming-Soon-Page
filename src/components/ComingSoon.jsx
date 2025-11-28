import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";

function ComingSoon() {

    const [email, setEmail] = useState("");

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Email Submitted : ", email);
    }

    return (
        <section className=" h-screen w-full flex items-center justify-center bg-black text-white">

            {/* background image */}
            <div className="absolute inset-0 bg-[url('/bg-image.jpg')] bg-cover bg-center bg-no-repeat" />

            {/* dark transparent overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* logo */}
            <header className="absolute top-10 w-full flex justify-center z-20">
                <img src="/geolook-logo.jpg" alt="GeoLook Logo" className="h-12 opacity-90" />
            </header>

            {/* social icon */}
            <aside className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 opacity-80 z-20">
                <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="hover:text-blue-400 transition duration-300"
                >
                    <FaLinkedinIn size={24} />
                </a>
            </aside>

            {/* middle content */}
            <main className="relative z-20 text-center max-w-3xl px-6">

                <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight mb-6 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Coming Soon
                </h1>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                    We're building something powerful. A platform that will redefine how India
                    monitors and maintains its infrastructure.
                    <br />
                    <span className="font-semibold text-gray-100">
                        Stay tuned - GeoLook is almost ready.
                    </span>
                </p>

                {/* eamil form */}
                <form
                    onSubmit={handleSubmit}
                    className="mt-10 flex items-center justify-center gap-4"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={handleEmailChange}
                        className="px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 focus:border-white/40 transition placeholder-gray-400 text-white outline-none min-w-[280px] backdrop-blur-xl text-lg"
                    />

                    <button
                        type="submit"
                        className="px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-md hover:shadow-blue-600/40 duration-300 whitespace-nowrap hover:cursor-pointer text-lg"
                    >
                        Notify Me
                    </button>
                </form>

                {/* cta options- */}
                <div className="mt-10 flex flex-col gap-2 text-gray-300 text-sm tracking-wide">
                    <span className="hover:text-white transition cursor-pointer hover:underline underline-offset-4">
                        Stay Updated — Join the Early Access List
                    </span>
                    <span className="hover:text-white transition cursor-pointer hover:underline underline-offset-4">
                        Get Notified When We Launch
                    </span>
                    <span className="hover:text-white transition cursor-pointer hover:underline underline-offset-4">
                        Be the First to Experience GeoLook
                    </span>
                </div>
            </main>
        </section>
    );
}

export default ComingSoon;
