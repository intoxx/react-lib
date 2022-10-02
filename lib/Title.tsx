import { styled } from "@stitches/react";

const STitle = styled("h1", {
	variants: {
		bruh: {
			true: {
				padding: "15px"
			}
		},

		color: {
			primary: {
				color: "red",
				backgroundColor: "black",
				"&:hover": {
					color: "darkviolet"
				}
			},

			secondary: {
				color: "white",
				"&:hover": {
					color: "lightgray"
				}
			}
		},

		size: {
			small: {
				fontSize: "20px"
			},

			medium: {
				fontSize: "30px"
			},

			large: {
				fontSize: "50px"
			},
		}
	},

	defaultVariants: {
		color: "primary"
	}
});

export function Title() {
	return <STitle color="primary" size="large" bruh>Test</STitle>
}
