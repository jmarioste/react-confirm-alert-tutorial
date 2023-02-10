import { Dialog } from "@headlessui/react";
import React from "react";
import { AlertComponentProps } from "./AlertProvider";
const AlertDialog = (props: AlertComponentProps) => {
  return (
    <Dialog
      as="div"
      className="relative z-10"
      onClose={props.onClose}
      open={props.open}
    >
      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              {props.title}
            </Dialog.Title>
            <div className="mt-2">
              <p className="text-sm text-gray-500">{props.message}</p>
            </div>

            <div className="flex gap-2 mt-4">
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                onClick={props.onConfirm}
              >
                {props.confirming ? "Loading..." : "Yes"}
              </button>
              <button
                type="button"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={props.onClose}
              >
                No
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};
export default AlertDialog;
