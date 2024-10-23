import { useState } from "react";

export default function GestionStagiares() {
  const [selectedStagiares, setSelectedStagiares] = useState({hobies:[]});
  const [stagiares, setStagiares] = useState([]);

  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center justify-center p-10">
          <div className="mx-auto w-full max-w-[550px] bg-white p-4 rounded">
            <htmlForm>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="fName"
                      id="fName"
                      placeholder="First Name"
                      onChange={(e)=>setSelectedStagiares({...selectedStagiares,nom:e.target.value})}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label htmlFor="lName" className="mb-3 block text-base font-medium text-[#07074D]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lName"
                      id="lName"
                      onChange={(e)=>setSelectedStagiares({...selectedStagiares,prenom:e.target.value})}
                      placeholder="Last Name"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                  Age
                </label>
                <input
                  type="number"
                  name="guest"
                  id="guest"
                  placeholder="age"
                  min="0"
                  onChange={(e)=>setSelectedStagiares({...selectedStagiares,age:e.target.value})}
                  className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-bold">Selecte your groupe</label>
                <select name="groupe" className="border m-3" onChange={(e)=>setSelectedStagiares({...selectedStagiares,goupe:e.target.value})}>
                  <option value="">Selectioner</option>
                  <option value="DD205">DD205</option>
                  <option value="DD206">DD206</option>
                  <option value="IT201">IT201</option>
                  <option value="IT200">IT200</option>
                </select>
              </div>

              <div className="mb-5">
                <label className="mb-3 block text-base font-medium text-[#07074D]">Sexe</label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center">
                    <input type="radio" name="sexe" value="homme" id="radioButton1" className="h-5 w-5" onClick={(e)=>e.target.checked?setSelectedStagiares({...selectedStagiares,sexe:e.target.value}):null} />
                    <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#07074D]">
                      Homme
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input type="radio" name="sexe" value="femmme" id="radioButton2" className="h-5 w-5" onClick={(e)=>e.target.checked?setSelectedStagiares({...selectedStagiares,sexe:e.target.value}):null} />
                    <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">
                      Femme
                    </label>
                  </div>
                </div>
                {/* part chekBox */}
                <div className="mt-5">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">Hobbies</label>
                  <div className="flex items-center space-x-6">
                    {/* container Hobbies */}
                    <div className="flex items-center justify-evenly   gap-2">
                      <input type="checkbox" name="fishing" id="fishing" className="h-5 w-5 border" value="fishing" onClick={(e) =>e.target.checked?setSelectedStagiares({...selectedStagiares,hobies:[...selectedStagiares.hobies,e.target.value]}):selectedStagiares.hobies=selectedStagiares.hobies.filter((item)=>item!==e.target.value)} />
                      <label htmlFor="fishing" className="pl-3 text-base font-medium ">
                        Fishing
                      </label>
                      <input type="checkbox" name="coking" id="coking" className="h-5 w-5 border " value="coking" onClick={(e) =>e.target.checked?setSelectedStagiares({...selectedStagiares,hobies:[...selectedStagiares.hobies,e.target.value]}):selectedStagiares.hobies=selectedStagiares.hobies.filter((item)=>item!==e.target.value)}/>
                      <label htmlFor="coking" className="pl-3 text-base font-medium ">
                        coking
                      </label>
                      <input type="checkbox" name="skiing" id="skiing" className="h-5 w-5 border " value="skiing" onClick={(e) =>e.target.checked?setSelectedStagiares({...selectedStagiares,hobies:[...selectedStagiares.hobies,e.target.value]}):selectedStagiares.hobies=selectedStagiares.hobies.filter((item)=>item!==e.target.value)} />
                      <label htmlFor="skiing" className="pl-3 text-base font-medium ">
                        skiing
                      </label>
                      <input type="checkbox" name="bike" id="bike" className="h-5 w-5 border " value="bike" onClick={(e) =>e.target.checked?setSelectedStagiares({...selectedStagiares,hobies:[...selectedStagiares.hobies,e.target.value]}):selectedStagiares.hobies=selectedStagiares.hobies.filter((item)=>item!==e.target.value)} />
                      <label htmlFor="bike" className="pl-3 text-base font-medium ">
                        bike
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button className="hover:shadow-htmlForm rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none" onClick={()=>{console.log(selectedStagiares)}}>
                  Submit
                </button>
              </div>
            </htmlForm>
          </div>
        </div>
        {/* table */}
        <div className="flex flex-col w-[700px] p-5 ">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white border-b">
                <tr>
                  <th  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    #
                  </th>
                  <th  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    First
                  </th>
                  <th  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Last
                  </th>
                  <th  className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                    Handle
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-100 border-b">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Mark</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">Otto</td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
