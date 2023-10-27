import React, {useState} from "react";
import styles from "./Household.module.css"

export default function Household() {

  const initialHouseholdMembers = [
    {
      name: 'Jerome Bell',
      nickname: 'Rome',
      covered: true,
      subscriber: true,
      insurance: 'primary',
      id: '',
    },
    {
      name: 'Stacy Bell',
      nickname: 'Stacy',
      covered: true,
      subscriber: false,
      insurance: 'primary',
      id: '',
    },
    {
      name: 'Rebecca Bell',
      nickname: 'Becca',
      covered: false,
      subscriber: false,
      insurance: 'primary',
      id: '',
    },
  ];

  const [householdMembers, setHouseholdMembers] = useState(initialHouseholdMembers);

  return (
    <div className=" text-semibold sans text-gray-500">
      <form className=" ">
        <div className="max-w-32 p-4 m-4">
          <h1 className="text-tw-black font-medium mb-4">Household</h1>
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-1">
              <label className="text-tw-gray text-xs">Covered</label>
            </div>
            <div className="col-span-1">
              <label className="text-tw-gray text-xs">Name</label>
            </div>
            <div className="col-span-1">
              <label className="text-tw-gray text-xs">Subscriber</label>
            </div>
            <div className="col-span-1">
              <label className="text-tw-gray text-xs">Insurance</label>
            </div>
            <div className="col-span-1">
              <label className="text-tw-gray text-xs">ID</label>
            </div>

            {householdMembers.map((member, index) => (
              <React.Fragment key={index}>
                <div className="col-span-1 px-2 py-1 flex items-center">
                  <label className={styles["checkbox-container"]}>
                    <input type="checkbox" className={styles['checkbox-custom']} checked={member.covered} />
                    <span className={styles['checkmark']}></span>
                  </label>
                </div>
                <div className="col-span-1 px-2 py-1 ">
                  {member.name} ({member.nickname})
                </div>
                <div className="col-span-1 px-2 py-1">
                  <input type="radio" checked={member.subscriber} />
                </div>
                <div className="col-span-1 px-2 py-1">
                  <select value={member.insurance}>
                    <option value="primary">Primary</option>
                    <option value="secondary">Secondary</option>
                  </select>
                </div>
                <div className="col-span-1 px-2 py-1">
                  <input type="text" placeholder="Ins. ID/SSN" value={member.id} />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}