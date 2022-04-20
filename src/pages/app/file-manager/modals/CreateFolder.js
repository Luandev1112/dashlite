import React, { useContext, useState } from "react";
import { Icon, RSelect } from "../../../../components/Component";
import { Button, FormGroup } from "reactstrap";
import { FileManagerContext } from "../FileManagerContext";
import { useForm } from "react-hook-form";
import { selectFolderTypes } from "../Data";

const CreateFolder = ({ toggle }) => {
  const { createFolder } = useContext(FileManagerContext);
  const [svg, setSvg] = useState(selectFolderTypes[0].svg);

  const { errors, register, handleSubmit } = useForm();

  const onSubmit = (formData) => {
    createFolder(formData.name, svg);
    toggle();
  };

  return (
    <React.Fragment>
      <a
        href="#close"
        onClick={(ev) => {
          ev.preventDefault();
          toggle();
        }}
        className="close"
      >
        <Icon name="cross-sm"></Icon>
      </a>
      <div className="modal-body modal-body-md">
        <div className="nk-upload-form mb-0">
          <h5 className="title mb-3">Create Folder</h5>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <label className="form-label">Folder Name</label>
              <input name="name" type="text" ref={register({ required: true })} className="form-control"></input>
              {errors.name && <span className="invalid">This field is required</span>}
            </FormGroup>
            <FormGroup>
              <label className="form-label">Folder Type</label>
              <RSelect
                options={selectFolderTypes}
                defaultValue={selectFolderTypes[0]}
                onChange={(ev) => setSvg(ev.svg)}
              />
            </FormGroup>
            <ul className="btn-toolbar g-4 align-center justify-end">
              <li>
                <a
                  href="#"
                  onClick={(ev) => {
                    ev.preventDefault();
                    toggle();
                  }}
                  className="link link-primary"
                >
                  Cancel
                </a>
              </li>
              <li>
                <Button color="primary" type="submit">
                  Create
                </Button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateFolder;
