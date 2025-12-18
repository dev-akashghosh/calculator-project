import BasicCalculator from "@/components/BasicCalculator";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Basic | Calculator Project",
	description: "Basic page of Calculator Project",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-2xs">
				<CardHeader>
					<CardTitle className="text-center text-2xl font-semibold">
						Basic Calculator
					</CardTitle>
				</CardHeader>

				<CardContent>
					<BasicCalculator />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
