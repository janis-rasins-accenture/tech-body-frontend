import React from 'react'
import Yup from 'yup'
import Modal from 'react-bootstrap/Modal'
import { BasicPostIF, PostIF } from '../../types/posts'
import { Formik, FormikHelpers } from 'formik'
import { CustomFormIF } from '../common/CustomForm/models'
import CustomForm from '../common/CustomForm/CustomForm'

interface EditPostProps {
  validationSchema: Yup.ObjectSchema<BasicPostIF>
  formFields: CustomFormIF[]
  initialValues: BasicPostIF
  post: PostIF
  handleEditPost: (values: BasicPostIF) => void
  setPostEditModalItem: (post: PostIF) => void
}

const PostEditModal = ({
  validationSchema,
  formFields,
  initialValues,
  handleEditPost,
  post,
  setPostEditModalItem,
}: EditPostProps) => {
  const closeModalHandler = () => {
    setPostEditModalItem({} as PostIF)
  }

  const handleSubmit = (values: BasicPostIF, actions: FormikHelpers<BasicPostIF>) => {
    actions.setSubmitting(false)
    handleEditPost(values)
  }

  return (
    <Modal
      show={!!post.postId}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={closeModalHandler}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Edit Post</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Formik
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          initialValues={initialValues}
        >
          {({ handleChange, values, handleSubmit, touched, errors }) => (
            <CustomForm
              formFields={formFields}
              errors={errors}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              submitText="Send"
              touched={touched}
              values={values}
            />
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  )
}

export default PostEditModal
