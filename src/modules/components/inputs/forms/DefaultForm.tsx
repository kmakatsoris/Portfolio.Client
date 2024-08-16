import React, { useContext, useState } from "react";
import styles from "./DefaultForm.module.css";
import { GeneralDataContext } from "../../../../services/DataProviders/GeneralDataProvider";
import ComingSoonLoader from "../../loaders/ComingSoonLoader";

interface DefaultFormProps {
  sideSubmitMessage?: string;
  formTitle: string;
  fieldTitles: { [key: string]: string };
  titleNames: { [key: string]: string };
  titleMargin: string;
  submitMargin: string;
  submitBtnW?: string;
  formMargin: string;
  columnExpression: string; // "33.3333% - 10px" -> For 3 columns with padding 10px
  inputW: string;
  inputH: string;
  validationFunctions: {
    [key: string]: ValidationFunctionType;
  };
}

const DefaultForm = (props: DefaultFormProps) => {
  const { setGlassModalInstance, setPrevGlassModalInstance } =
    useContext(GeneralDataContext);
  const [formData, setFormData] = useState<{ [key: string]: string }>(
    Object.keys(props.fieldTitles).reduce(
      (acc: { [key: string]: string }, key) => {
        acc[key] = "";
        return acc;
      },
      {}
    )
  );
  const [errors, setErrors] = useState<{ [key: string]: string }>(
    Object.keys(props.fieldTitles).reduce(
      (acc: { [key: string]: string }, key) => {
        acc[key] = "";
        return acc;
      },
      {}
    )
  );

  const validationErrorMessageHandler = (
    field: string,
    value: string,
    validationFunction: ValidationFunctionType
  ) => {
    switch (field) {
      case "FirstName":
        let eFirstName: string =
          "Your First Name is Invalid [FirstName SecondName ...].";
        return (
          validationFunction as (value: string, errorMsg: string) => string
        )(value, eFirstName);
      case "LastName":
        let eLastName = "Your Last Name is Invalid [LastName].";
        return (
          validationFunction as (value: string, errorMsg: string) => string
        )(value, eLastName);
      default:
        return (validationFunction as (value: string) => string)(value);
    }
  };

  const validationHandler = (field: string, value: string) => {
    const validationFunction = props.validationFunctions[field];
    if (validationFunction) {
      const error = validationErrorMessageHandler(
        field,
        value,
        validationFunction
      );
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: error,
      }));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    validationHandler(name, value);
  };

  const handleSubmit = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();

    // Validate all fields before submission
    const newErrors: { [key: string]: string } = {};
    Object.entries(formData).forEach(([field, value]) => {
      const validationFunction = props.validationFunctions[field];
      if (validationFunction) {
        const error = validationErrorMessageHandler(
          field,
          value,
          validationFunction
        );
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error !== "")) {
      setGlassModalInstance((prevState: GlassModalDataContract) => {
        setPrevGlassModalInstance(prevState);
        return {
          ...prevState,
          content: (
            <>
              <ComingSoonLoader />
            </>
          ),
          isOpen: true,
        };
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {/** Title */}
        <div
          className={styles.containerTitleContainer}
          style={{ margin: `${props.titleMargin}` }}
        >
          <div className={styles.containerTitle}>{props.formTitle}</div>
        </div>

        {/** Form */}
        <form
          onSubmit={handleSubmit}
          className={`${styles.formContainer}`}
          style={{ margin: props.formMargin }}
        >
          {/** Rendering all the Register Properties. */}
          {Object.entries(formData).map(([field, value]) => (
            <div
              key={field}
              className={styles.formFields}
              style={{
                flex: `0 0 calc(${props.columnExpression})`,
              }}
            >
              <label htmlFor={field} className={styles.label}>
                {props.titleNames[field]}
              </label>
              <input
                type="text"
                id={field}
                name={field}
                value={value}
                onChange={handleChange}
                maxLength={50}
                className={styles.input}
                style={{ width: props.inputW, height: props.inputH }}
              />
              {errors[field as keyof typeof formData] !== "" ? (
                <div className={styles.error}>
                  {errors[field as keyof typeof formData]}
                </div>
              ) : (
                <div className={styles.charactersRemainingContainer}>
                  {field && field.includes("Country")
                    ? "Thank you for the data: https://www.worldometers.info/"
                    : `Characters remaining: ${
                        50 -
                        (formData[field as keyof typeof formData] || "").length
                      }`}
                </div>
              )}
            </div>
          ))}
          {/** Submit */}
          <div
            className={styles.submitContainer}
            style={{ margin: props.submitMargin }}
          >
            <button
              type="submit"
              className={styles.submit}
              style={{ width: props.submitBtnW }}
            >
              Submit
            </button>
            {props.sideSubmitMessage && (
              <div className={styles.forgotPassword}>
                {props.sideSubmitMessage}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default DefaultForm;
