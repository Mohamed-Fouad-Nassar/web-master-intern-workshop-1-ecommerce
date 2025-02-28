import { z } from "zod";

const signinSchema = z.object({
  email: z.string().min(1, { message: "Email address is required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters longs" })
    .regex(/.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/, {
      message: "Password should contain at least 1 special character",
    }),
});

type SigninFormTypes = z.infer<typeof signinSchema>;

export { signinSchema, type SigninFormTypes };
