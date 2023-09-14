// import React, { useState, useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { Form, FormField, FormItem, FormLabel, Input } from "shadcn-ui/components/form";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const form = useForm();

//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     setFiles(files);
//   };

//   const onSubmit = () => {
//     const formData = new FormData();
//     files.forEach((file) => {
//       formData.append("files", file);
//     });

//     // Post the form data to the backend
//     fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });
//   };

//   return (
//     <Form onSubmit={form.handleSubmit(onSubmit)}>
//       <FormField name="files">
//         <FormItem>
//           <FormLabel>Files</FormLabel>
//           <Input type="file" multiple={true} onChange={handleFileChange} />
//         </FormItem>
//       </FormField>
//       <FormItem>
//         <Button type="submit">Upload</Button>
//       </FormItem>
//     </Form>
//   );
// };

// export default FileUpload;


// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { Form, FormField, FormItem, Input, Button } from "shadcn-ui";

// const FileUpload = () => {
//   const [files, setFiles] = useState([]);
//   const form = useForm();

//   const onSubmit = async () => {
//     const formData = new FormData();
//     files.forEach((file) => {
//       formData.append("files", file);
//     });

//     await fetch("/api/upload", {
//       method: "POST",
//       body: formData,
//     });
//   };

//   return (
//     <Form onSubmit={form.handleSubmit(onSubmit)}>
//       <FormField name="files" render={({ field }) => (
//         <FormItem>
//           <Input type="file" multiple={true} {...field} />
//         </FormItem>
//       )} />
//       <Button type="submit">Upload</Button>
//     </Form>
//   );
// };

// export default FileUpload;


// Argument of type '{ first_name?: string | undefined; last_name?: string | undefined; email?: string | undefined; password?: string | undefined; date_of_birth?: Date | undefined; phone?: string | undefined; status?: "client" | ... 1 more ... | undefined; address?: string | undefined; image?: any; }' is not assignable to parameter of type '{ key: ["first_name" | "last_name" | "email" | "password" | "date_of_birth" | "phone" | "status" | "address" | "image"]; value: string | number | Blob | undefined; }'.
//   Type '{ first_name?: string | undefined; last_name?: string | undefined; email?: string | undefined; password?: string | undefined; date_of_birth?: Date | undefined; phone?: string | undefined; status?: "client" | ... 1 more ... | undefined; address?: string | undefined; image?: any; }' is missing the following properties from type '{ key: ["first_name" | "last_name" | "email" | "password" | "date_of_birth" | "phone" | "status" | "address" | "image"]; value: string | number | Blob | undefined; }': key, value