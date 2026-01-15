// // "use client";

// // import type React from "react";
// // import { useState, useTransition } from "react";
// // import { useRouter } from "next/navigation";
// // import Link from "next/link";
// // import { authClient } from "@/lib/auth-client";

// // type UserRole = "buyer" | "seller";

// // export default function SignupPage() {
// //   const router = useRouter();
// //   const [isPending, startTransition] = useTransition();
// //   const [error, setError] = useState("");

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //     role: "buyer" as UserRole,
// //   });

// //   const handleChange = (
// //     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
// //   ) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setError("");

// //     startTransition(async () => {
// //       try {
// //         await authClient.signUp.email(
// //           {
// //             email: formData.email,
// //             password: formData.password,
// //             name: formData.name,
// //             role: formData.role,
// //             callbackURL: "/dashboard",
// //           },
// //           {
// //             onSuccess: () => {
// //               router.push("/dashboard");
// //             },
// //             onError: (ctx) => {
// //               setError(ctx.error.message ?? "Signup failed");
// //             },
// //           }
// //         );
// //       } catch {
// //         setError("Something went wrong");
// //       }
// //     });
// //   };

// //   return (
// //     <div className="space-y-6">
// //       <div className="text-center">
// //         <h1 className="text-3xl font-bold mb-2">Get Started</h1>
// //         <p className="text-muted-foreground">
// //           Create your real estate account
// //         </p>
// //       </div>

// //       {error && (
// //         <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-sm text-destructive">
// //           {error}
// //         </div>
// //       )}

// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label className="block text-sm font-medium mb-2">Full Name</label>
// //           <input
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-2 border rounded-lg"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">Email</label>
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-2 border rounded-lg"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">Password</label>
// //           <input
// //             type="password"
// //             name="password"
// //             value={formData.password}
// //             onChange={handleChange}
// //             required
// //             className="w-full px-4 py-2 border rounded-lg"
// //           />
// //         </div>

// //         <div>
// //           <label className="block text-sm font-medium mb-2">I am a</label>
// //           <select
// //             name="role"
// //             value={formData.role}
// //             onChange={handleChange}
// //             className="w-full px-4 py-2 border rounded-lg"
// //           >
// //             <option value="buyer">Buyer</option>
// //             <option value="seller">Seller</option>
// //           </select>
// //         </div>

// //         <button
// //           type="submit"
// //           disabled={isPending}
// //           className="w-full bg-primary text-primary-foreground py-2 rounded-lg disabled:opacity-50"
// //         >
// //           {isPending ? "Creating account..." : "Sign Up"}
// //         </button>
// //       </form>

// //       <p className="text-center text-sm text-muted-foreground">
// //         Already have an account?{" "}
// //         <Link href="/login" className="text-primary font-medium">
// //           Sign in
// //         </Link>
// //       </p>
// //     </div>
// //   );
// // }


// "use client";

// import type React from "react";
// import { useState, useTransition } from "react";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import { authClient } from "@/lib/auth-client";

// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// type UserRole = "buyer" | "seller";

// export default function SignupPage() {
//   const router = useRouter();
//   const [isPending, startTransition] = useTransition();
//   const [error, setError] = useState("");

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "buyer" as UserRole,
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");

//     startTransition(async () => {
//       try {
//         await authClient.signUp.email(
//           {
//             email: formData.email,
//             password: formData.password,
//             name: formData.name,
//             role: formData.role,
//             callbackURL: "/dashboard",
//           },
//           {
//             onSuccess: () => {
//               router.push("/dashboard");
//             },
//             onError: (ctx) => {
//               setError(ctx.error.message ?? "Signup failed");
//             },
//           }
//         );
//       } catch {
//         setError("Something went wrong");
//       }
//     });
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center px-4">
//       <Card className="w-full max-w-md shadow-md">
//         <CardHeader className="text-center">
//           <CardTitle className="text-2xl">Get Started</CardTitle>
//           <CardDescription>Create your real estate account</CardDescription>
//         </CardHeader>

//         <CardContent className="space-y-4">
//           {error && (
//             <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 text-sm text-destructive">
//               {error}
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-sm font-medium mb-2">Full Name</label>
//               <input
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-lg"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-2">I am a</label>
//               <select
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 border rounded-lg"
//               >
//                 <option value="buyer">Buyer</option>
//                 <option value="seller">Seller</option>
//               </select>
//             </div>

//             <Button
//               type="submit"
//               disabled={isPending}
//               className="w-full"
//             >
//               {isPending ? "Creating account..." : "Sign Up"}
//             </Button>
//           </form>

//           <p className="text-center text-sm text-muted-foreground">
//             Already have an account?{" "}
//             <Link href="/login" className="text-primary font-medium">
//               Sign in
//             </Link>
//           </p>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }


"use client";

import type React from "react";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authClient, signIn } from "@/lib/auth-client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Eye, EyeOff } from "lucide-react";
import { Separator } from "@/components/ui/separator";

type UserRole = "buyer" | "seller";

export default function SignupPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "buyer" as UserRole,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (value: UserRole) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    startTransition(async () => {
      try {
        await authClient.signUp.email(
          {
            email: formData.email,
            password: formData.password,
            name: formData.name,
            role: formData.role,
            callbackURL: "/dashboard",
          },
          {
            onSuccess: () => router.push("/dashboard"),
            onError: (ctx) => setError(ctx.error.message ?? "Signup failed"),
          }
        );
      } catch {
        setError("Something went wrong");
      }
    });
  };
  const handleGoogleLogin = () => {
    startTransition(async () => {
      try {
        await signIn.social({
          provider: "google",
          callbackURL: "/update-profile",
        });
      } catch {
        setError("Google login failed");
      }
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="w-full max-w-md shadow-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Get Started</CardTitle>
          <CardDescription>Create your real estate account</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {error && (
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg px-4 py-2 text-sm text-destructive">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="relative w-full">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                  className="pr-10" // space for the icon
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-2 flex items-center justify-center text-muted-foreground hover:text-foreground focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>


            <div className="space-y-2 w-full">
              <Label htmlFor="role">I am a</Label>
              <Select
                value={formData.role}
                onValueChange={(value) => handleRoleChange(value as UserRole)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Buyer</SelectItem>
                  <SelectItem value="seller">Seller</SelectItem>
                </SelectContent>
              </Select>
            </div>


            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Creating account..." : "Sign Up"}
            </Button>
          </form>

         

          <div className="relative">
            <Separator />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-2 text-sm text-muted-foreground">
              Or continue with
            </span>
          </div>

          <Button
            variant="outline"
            className="w-full"
            onClick={handleGoogleLogin}
            disabled={isPending}
          >
            Google
          </Button>

           <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
