import { Icon } from "@/pages/tic-tac-toe";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Inputs = {
  icons: Icon[];
  icon: Icon;
  setIcon: (icon: Icon) => void;
};

export default function IconPicker(inputs: Inputs) {
  const [selected, setSelected] = useState(inputs.icon);

  const onChange = (icon: Icon) => {
    inputs.setIcon(icon);
    setSelected(icon);
  };

  return (
    <Listbox value={selected} onChange={onChange}>
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className="relative h-full w-full cursor-default rounded-md bg-white py-1.5 pl-3 text-left text-smoky shadow-sm ring-1 ring-inset ring-umber/75 focus:outline-none focus:ring-2 focus:ring-umber sm:text-sm sm:leading-6">
              <span className="flex items-center">
                <selected.icon />
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <FiChevronDown
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-umber ring-opacity-5 focus:outline-none sm:text-sm">
                {inputs.icons.map((icon) => (
                  <Listbox.Option
                    key={icon.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? "bg-cambridge text-white"
                          : "text-smoky cursor-pointer",
                        "relative cursor-default select-none py-2 pl-3"
                      )
                    }
                    value={icon}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <icon.icon />
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
