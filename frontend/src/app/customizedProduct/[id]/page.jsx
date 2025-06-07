import Image from "next/image";
import FlourOrderForm from "@/components/FlourOrderForm";
// import SuggestedMix from "@/components/SuggestedMix";

const page = () => {
  const suggestions = [
    { label: "wheat-10kg" },
    { label: "Moong-1kg" },
    { label: "jawar-2kg" },
    { label: "bajra-500gm" },
  ];
    return (
        <main className="min-h-screen bg-black text-white flex flex-col items-center px-4 py-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start max-w-6xl w-full gap-10">
                <Image
                    src="/golden-wheat.png"
                    alt="Golden Wheat Flour"
                    width={350}
                    height={500}
                    className="rounded-xl w-full max-w-sm object-cover"
                />
                <div className="flex flex-col items-start space-y-6 w-full">
                    <h1 className="text-3xl lg:text-4xl font-bold text-[#3f2b2b]">
                        Multigrain flour
                    </h1>
                    <FlourOrderForm />
                </div>
            </div>
            <div className="mt-12 bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-2xl text-white max-w-6xl w-full shadow-lg">
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    Our suggestion <span>✨</span>
                </h2>
                <div className="flex flex-wrap gap-4">
                    {suggestions.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#c07e49] px-4 py-2 rounded-full shadow text-sm"
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            </div>{" "}
        </main>
    );
};

export default page;

