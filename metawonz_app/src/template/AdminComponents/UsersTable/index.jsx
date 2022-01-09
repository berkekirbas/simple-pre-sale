import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { USER_TYPE } from "../../../config/Constants";
import { dataSelector, getAllUsers } from "../../../store/slices/DataSlice";

const UsersTable = () => {
  const { users, loading } = useSelector(dataSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <table className="table-auto w-full">
      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
        <tr>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Name</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">Email</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-left">MetaWonz Count</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-center">WalletAddress</div>
          </th>
          <th className="p-2 whitespace-nowrap">
            <div className="font-semibold text-center">Role</div>
          </th>
        </tr>
      </thead>
      <tbody className="text-sm divide-y divide-gray-100">
        {loading
          ? null
          : users.map((users) => (
              <Fragment key={users.name}>
                <tr>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="font-medium text-gray-800">
                        {users.name}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{users.email}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                      {users.metawonzValue}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">
                      {users.walletAddress.slice(0, 10) + "..." || "Nope"}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-lg text-center">
                      {users.role === USER_TYPE.ADMIN ? (
                        <span className="text-red-500">{users.role}</span>
                      ) : (
                        users.role
                      )}
                    </div>
                  </td>
                </tr>
              </Fragment>
            ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
