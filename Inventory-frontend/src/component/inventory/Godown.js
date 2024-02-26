import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ImageUpload from "./ImageUpload";
// import Modal from "@mui/material/Modal";

const Godown = () => {
    const [formData, setFormData] = useState("");

  const Type = [
    {
      value: "Odisha",
      label: "Odisha",
    },
    {
      value: "Maharastra",
      label: "Maharastra",
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,

    });
  };

  //    const saveCompany = async () => {
  //     await api.saveCompany(formData);
  //    navigate("/organisation/company")
  //     setFormData({
  //       companyName: "",
  //       companyType: "",
  //       legalOrTradingName: "",
  //       address: "",
  //       registrationNumber: "",
  //       contactNumber: "",
  //       email: "",
  //       website: "",
  //       city: "",
  //       state: "",
  //       zipCode: "",
  //       country: "",
  //       cin: "",
  //       gst: "",
  //       uan: "",
  //       createdDate: "",
  //     });
  //     setFile("")
  //     setSwalProps({
  //       show: true,
  //       title: 'HRMS',
  //       text: 'Data Uploaded Successfully',
  //   });
  //   };

  //   let buttonCheck =
  //   formData.companyName.length > 0 &&
  //   formData.companyType.length > 0 &&
  //   formData.legalOrTradingName.length > 0 &&
  //   formData.address.length > 0 &&
  //   formData.registrationNumber.length > 0 &&
  //   formData.contactNumber.length > 0 &&
  //   formData.email.length > 0 &&
  //   formData.website.length > 0 &&
  //   formData.city.length > 0 &&
  //   formData.state.length > 0 &&
  //   formData.zipCode.length > 0 &&
  //   formData.country.length > 0 &&
  //   formData.cin.length > 0 &&
  //   formData.gst.length > 0 &&
  //   formData.uan.length > 0 &&
  //   formData.createdDate.length > 0;

//   const BootstrapInput = styled(InputBase)(({ theme }) => ({
//     'label + &': {
//       marginTop: theme.spacing(3),
//     },
//     '& .MuiInputBase-input': {
//       borderRadius: 4,
//       position: 'relative',
//       backgroundColor: "#fff",
//       border: '1px solid',
//       borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
//       fontSize: 16,
//       width: '753px',
//       padding: '10px 12px',
//       transition: theme.transitions.create([
//         'border-color',
//         'background-color',
//         'box-shadow',
//       ]),
//     },
//   }));

  const cancelButton = () => {
    setFormData({
      godownName: "",
      streetAddress: "",
      placeOfSupply: "",
      pinCode: "",
      city: "",
    });
  };

  const handleSubmit = (e) => {
    console.log("Form submitted:", formData);
  };

  return (
    <div className="form-container">
    <h3>Add New Godown</h3>
         <form onSubmit={handleSubmit}>
                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>Godown Name</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="godownName"
                        id="godownName"
                        value={formData.godownName}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>

                    <div className="buyer-input-label">
                      <label>Street Address</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="streetAddress"
                        id="streetAddress"
                        value={formData.streetAddress}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                        <label>Place of Supply</label>
                        <TextField
                            id="placeOfSupply"
                            margin="dense"
                            className="buyer-input"
                            select
                            fullWidth
                            defaultValue="Select State"
                            value={formData.placeOfSupply}
                            onChange={(e) => handleInputChange(e)}
                            name="placeOfSupply"
                            SelectProps={{
                            native: true,
                            }}
                        >
                            {Type.map((option) => (
                            <option
                                key={option.value}
                                disabled={
                                option.label === "Select State"
                                    ? true
                                    : false
                                }
                                value={option.label}
                            >
                                {option.label}
                            </option>
                            ))}
                        </TextField>
                    </div>
                    {/*  */}

                    <div className="buyer-input-label">
                      <label>Pin Code</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="number"
                        fullWidth
                        name="pinCode"
                        id="pinCode"
                        value={formData.pinCode}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>

                  <div className="data-input-fields">
                    <div className="buyer-input-label">
                      <label>City</label>
                      <TextField
                        className="buyer-input"
                        margin="dense"
                        type="text"
                        fullWidth
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange(e)}
                        required
                      />
                    </div>
                  </div>
                  <div className="data-buttons">
                    <Button
                      id="input-btn-submit"
                      className="submit"
                      type="submit"
                      variant="outlined"
                    //   onClick={handleSave}
                      //   disabled={buttonCheck?false:true}
                    >
                      Submit
                    </Button>
                    <Button
                      id="input-btn-cancel"
                      className="cancel"
                      onClick={cancelButton}
                      variant="outlined"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
    </div>
               
  )
}

export default Godown