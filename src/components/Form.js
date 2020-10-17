import React from "react";
import { Formik, Field } from "formik";
import { PaymentInputsWrapper, usePaymentInputs } from "react-payment-inputs";
import { Button } from "@material-ui/core";
import images from "react-payment-inputs/images";
export default function Form() {
  const {
    meta,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    wrapperProps,
  } = usePaymentInputs();

  return (
    <Formik
      initialValues={{
        cardNumber: "",
        expiryDate: "",
        cvc: "",
      }}
      onSubmit={(data) => {
        alert("Card Data is valid. Redirect from here to payment Gateway. ");
      }}
      validate={() => {
        let errors = {};
        if (meta.erroredInputs.cardNumber) {
          errors.cardNumber = meta.erroredInputs.cardNumber;
        }
        if (meta.erroredInputs.expiryDate) {
          errors.expiryDate = meta.erroredInputs.expiryDate;
        }
        if (meta.erroredInputs.cvc) {
          errors.cvc = meta.erroredInputs.cvc;
        }
        return errors;
      }}
    >
      {({ handleSubmit, errors }) => (
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <PaymentInputsWrapper {...wrapperProps}>
              <svg {...getCardImageProps({ images })} />
              <Field name="cardNumber">
                {({ field }) => (
                  <input
                    {...getCardNumberProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
              <Field name="expiryDate">
                {({ field }) => (
                  <input
                    {...getExpiryDateProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
              <Field name="cvc">
                {({ field }) => (
                  <input
                    {...getCVCProps({
                      onBlur: field.onBlur,
                      onChange: field.onChange,
                    })}
                  />
                )}
              </Field>
            </PaymentInputsWrapper>
          </div>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            type="submit"
            disabled={Array.from(Object.values(errors)).length ? true : false}
          >
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
}
