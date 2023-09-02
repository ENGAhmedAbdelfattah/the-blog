"use client";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import { useQuery, useQueryClient, useMutation } from "react-query";

import TextError from "@/components/UI/common/TextError";
import { addPost } from "@/api/postsApi";

function NewPostForm() {

  const queryClient = useQueryClient();
  const addPostMutation = useMutation(addPost, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  const initialValues = {
    postTitle: "",
    postAuthor: "",
    postContent: "",
  };

  const validationSchema = Yup.object({
    postTitle: Yup.string()
      .required("Title is required")
      .max(100, "Title must be less than 100 characters"),
    postAuthor: Yup.string().required("Author is required"),
    postContent: Yup.string()
      .required("Content is required")
      .min(50, "Content must be at least 50 characters"),
  });

  const onSubmit = async(values: any, submitProps: any) => {
    try {
      await addPostMutation.mutateAsync(values);
      toast.success("Form submitted successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
    } catch (error: any) {
      toast.error('Error: ' + error.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }

    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  return (
    <section className="new-post-form">
      <h1>Creating new post</h1>
      <div className="post-form">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <div className="box post-title-box">
                  <label htmlFor="post-title">post title</label>
                  <Field
                    type="text"
                    id="post-title"
                    name="postTitle"
                    placeholder="Introduction"
                  />
                  <ErrorMessage name="postTitle" component={TextError} />
                </div>
                <div className="box post-author-box">
                  <label htmlFor="post-author">post author</label>
                  <Field
                    type="text"
                    id="post-author"
                    name="postAuthor"
                    placeholder="Introduction"
                  />
                  <ErrorMessage name="postAuthor" component={TextError} />
                </div>
                <div className="box post-content-box">
                  <label htmlFor="post-content">post content</label>
                  <Field
                    type="text"
                    id="post-content"
                    name="postContent"
                    placeholder="Introduction"
                  />
                  <ErrorMessage name="postContent" component={TextError} />
                </div>
                <div className="form-btns">
                  <button type="reset" className="cancel-btn">
                    Cancel
                  </button>
                  <button type="button" className="archef-btn">
                    Save as draft
                  </button>
                  <button
                    type="submit"
                    className="publish-btn"
                    disabled={formik.isSubmitting}
                  >
                    Publish
                  </button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
      <ToastContainer />
    </section>
  );
}

export default NewPostForm;
