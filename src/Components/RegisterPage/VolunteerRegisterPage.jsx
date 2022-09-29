import React, { useState, useEffect } from "react";
import {
  CheckBox,
  CheckBoxContainer,
  DateField,
  FieldContainer,
  FormContainer,
  FormWrapper,
  Heading,
  Heading2,
  HeadingContainer,
  InputAreaField,
  InputField,
  Label,
  Line,
  RadioBtn,
  SelectField,
  FileInput,
  ConditionalContainer,
  SubmitBtn,
  FormGroup,
  Text2,
} from "./RegisterPage.elements";

import { db } from "../../config";
import { addDoc, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const VolunteerRegisterPage = () => {
  //to navigate to succes page
  const navigate = useNavigate();

  //to handle image
  const [image, setImage] = useState(null);

  //to seterrors
  const [formErrors, setFormErrors] = useState({});

  const [isSubmit, setIsSubmit] = useState(false);

  //handling availability check box
  const [daysCheckValues, setDaysCheckValues] = useState({
    sunday: "no",
    monday: "no",
    tuesday: "no",
    wednesday: "no",
    thursday: "no",
    friday: "no",
    saturday: "no",
  });
  const initialValues = {
    volunteerFullName: "",
    volunteerFatherName: "",
    volunteerContactNumber: "",
    volunteerEmailId: "",
    educationQualification: "",
    volunteerDob: "",
    areaOfInterest: "",
    nawayathResidentBanglore: "",
    volunteerExperience: "",
    volunteerExperienceDetails: "",
    relationEmergency: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    if (formValues.volunteerExperience === "Yes") {
      setVolunteered(true);
    } else {
      setVolunteered(false);
    }
  });
  const [volunteered, setVolunteered] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //Adding days available object to formValues
  useEffect(() => {
    setFormValues({ ...formValues, ["availability"]: daysCheckValues });
  }, [daysCheckValues]);

  //function to handle check
  const handleDaysCheck = (e) => {
    const { name, value } = e.target;
    if (e.target.checked === true) {
      setDaysCheckValues({ ...daysCheckValues, [name]: "yes" });
    } else {
      setDaysCheckValues({ ...daysCheckValues, [name]: "no" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    uploadToDB();
  };

  const handleImage = (e) => {
    console.log(e.target.files[0].size);
    if (e.target.files[0].size >= 1000000) {
      e.target.value = "";
      alert("Upload image with size less than 1MB");
    } else {
      setImage(e.target.files[0]);
    }
  };

  useEffect(() => {
    setFormValues({ ...formValues, ["volunteerImage"]: image });
  }, [image]);
  const validate = (values) => {
    const errors = {};
    if (
      values.volunteerContactNumber.length !== 10 ||
      values.volunteerContactNumber.length === 0
    ) {
      alert("Number invalid");
      errors.mobileNumber = "Mobile Number is required";
    } else if ("yes" in Object.values(daysCheckValues) === false) {
      errors.mobileNumber = "Mobile Number is required";
    }
    return errors;
  };
  const uploadToDB = async () => {
    try {
      const docRef = await addDoc(collection(db, "volunteerDetails"), {
        volunteerFullName: formValues.volunteerFullName,
        volunteerFatherName: formValues.volunteerFatherName,
        volunteerContactNumber: formValues.volunteerContactNumber,
        volunteerEmailId: formValues.volunteerEmailId,
        educationQualification: formValues.educationQualification,
        volunteerDob: formValues.volunteerDob,
        areaOfInterest: formValues.areaOfInterest,
        volunteerExperience: formValues.volunteerExperience,
        volunteerExperienceDetails: formValues.volunteerExperienceDetails,
        relationEmergency: formValues.relationEmergency,
      });
      console.log("Document written with ID: ", docRef.id);
      navigate("/"); //TO DO: navigate auth succes page
    } catch (error) {
      console.log("UNSUCCESSFULL: " + error);
    }
  };
  return (
    <FormContainer>
      <FormWrapper>
        <HeadingContainer>
          <Line></Line>
          <Heading>Volunteer Registeration</Heading>
          <Line></Line>
        </HeadingContainer>
        <HeadingContainer>
          <Heading2>Volunteer details</Heading2>
        </HeadingContainer>
        <FormGroup onSubmit={handleSubmit}>
          <FieldContainer>
            <Label>
              Full Name:
              <InputField
                name="volunteerFullName"
                value={formValues.volunteerFullName}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Father Name:
              <InputField
                name="volunteerFatherName"
                value={formValues.volunteerFatherName}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Contact No:
              <InputField
                name="volunteerContactNumber"
                value={formValues.volunteerContactNumber}
                onChange={handleChange}
                required
              />
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Email Id:
              <InputField
                name="volunteerEmailId"
                value={formValues.volunteerEmailId}
                onChange={handleChange}
                required
              />
            </Label>
            <Label>
              Date of Birth:
              <DateField
                name="volunteerDob"
                value={formValues.volunteerDob}
                onChange={handleChange}
                required
              />
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Education Qualification:
              <SelectField
                value={formValues.educationQualification}
                onChange={handleChange}
                name="educationQualification"
                required
              >
                <option selected disabled value="">
                  Select your Qualification
                </option>
                <option value="student">Student</option>
                <option value="graduate">Graduate</option>
                <option value="post-graduate">Post Graduate</option>
              </SelectField>
            </Label>
            <Label>
              Skills:
              <InputField />
            </Label>
            <Label>
              Area of Interest:
              <SelectField
                value={formValues.areaOfInterest}
                onChange={handleChange}
                name="areaOfInterest"
                required
              >
                <option selected disabled value="">
                  Choose your area of interest
                </option>
                <option value="score-management">Score management</option>
                <option value="umpire">Umpire</option>
                <option value="ball-boy">Ball boy</option>
              </SelectField>
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Availability:
              <br></br>
              <small>
                Please select days in which you are available for volunteering.
              </small>
              <CheckBoxContainer>
                <Label htmlFor="sun">
                  <CheckBox
                    type="checkbox"
                    name="3/nov/2022"
                    value="yes"
                    onChange={handleDaysCheck}
                  />
                  3-November-2022 [Thursday]
                </Label>
                <Label htmlFor="mon">
                  <CheckBox
                    type="checkbox"
                    name="4/nov/2022"
                    value="yes"
                    onChange={handleDaysCheck}
                  />
                  4-November-2022 [Friday]
                </Label>
                <Label htmlFor="tue">
                  <CheckBox
                    type="checkbox"
                    name="5/nov/2022"
                    value="yes"
                    onChange={handleDaysCheck}
                  />
                  5-November-2022 [Saturday]
                </Label>
                <Label htmlFor="wed">
                  <CheckBox
                    type="checkbox"
                    name="6/nov/2022"
                    value="yes"
                    onChange={handleDaysCheck}
                  />
                  6-November-2022 [Sunday]
                </Label>
              </CheckBoxContainer>
            </Label>
            <Label>
              Do you have any Experience in Volunteering at Events?
              <CheckBoxContainer>
                <Label htmlFor="volunteerExperience">
                  <RadioBtn
                    value="Yes"
                    onChange={handleChange}
                    name="volunteerExperience"
                    required
                  />
                  Yes
                </Label>
                <Label htmlFor="volunteerExperience">
                  <RadioBtn
                    value="No"
                    onChange={handleChange}
                    name="volunteerExperience"
                    required
                  />
                  No
                </Label>
                <ConditionalContainer state={volunteered}>
                  <InputAreaField
                    placeholder="Give details of voluteering..."
                    onChange={handleChange}
                    name="volunteerExperienceDetails"
                  />
                </ConditionalContainer>
              </CheckBoxContainer>
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Permanent Address:
              <InputAreaField
                value={formValues.volunteerPermanentAddress}
                onChange={handleChange}
                name="volunteerPermanentAddress"
                required
              />
            </Label>
            <Label>
              Present Address:
              <InputAreaField
                value={formValues.volunteerPresentAddress}
                onChange={handleChange}
                name="volunteerPresentAddress"
              />
            </Label>
          </FieldContainer>
          <FieldContainer>
            <Label>
              Upload your photo
              <br />
              <small>Passport size photo preferred</small>
              <FileInput
                onChange={handleImage}
                name="volunteerImage"
                required
              />
            </Label>
          </FieldContainer>
          <HeadingContainer>
            <Heading2>Emergency Contacts:</Heading2>
          </HeadingContainer>
          <FieldContainer>
            <Label>
              Name:
              <InputField
                value={formValues.emergencyName}
                onChange={handleChange}
                name="emegencyName"
                required
              />
            </Label>
            <Label>
              Contact Number:
              <InputField
                value={formValues.emergencyContact}
                onChange={handleChange}
                name="emergencyContact"
                required
              />
            </Label>
            <Label>
              Relationship:
              <SelectField
                value={formValues.relationEmergency}
                onChange={handleChange}
                name="relationEmergency"
                required
              >
                <option selected disabled value="">
                  Select the relationship{" "}
                </option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="brother">Brother</option>
              </SelectField>
            </Label>
          </FieldContainer>
          <SubmitBtn>Register</SubmitBtn>
        </FormGroup>
      </FormWrapper>
    </FormContainer>
  );
};

export default VolunteerRegisterPage;
