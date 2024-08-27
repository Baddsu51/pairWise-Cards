export const ActionBar = () => {
  return (
    <div
      id="bar"
      class="absolute left-1/2 top-3 flex h-10 max-w-md -translate-x-1/2 items-center justify-between space-x-8 rounded-full bg-blue-50 px-6 shadow-md"
    >
      <div class="flex space-x-2.5">
        <div class="group relative flex size-6 items-center rounded-full p-1 transition-all duration-200 hover:bg-blue-200 hover:shadow-md active:bg-blue-300 active:shadow-inner">
          <img
            src="src/assets/typing.svg"
            alt="typing icon"
            class="size-full transition-all duration-200 group-hover:scale-110"
          />
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            Typing
          </span>
        </div>
        <div class="group relative flex size-6 items-center rounded-full p-1 transition-all duration-200 hover:bg-blue-200 hover:shadow-md active:bg-blue-300 active:shadow-inner">
          <img
            src="src/assets/swipping.svg"
            alt="swipping icon"
            class="size-full transition-all duration-200 group-hover:scale-110"
          />
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            Swipping
          </span>
        </div>
        <div class="group relative flex size-6 items-center rounded-full p-1 transition-all duration-200 hover:bg-blue-200 hover:shadow-md active:bg-blue-300 active:shadow-inner">
          <img
            src="src/assets/filling.svg"
            alt="filling icon"
            class="size-full transition-all duration-200 group-hover:scale-110"
          />
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            Filling
          </span>
        </div>
      </div>
      <div class="flex space-x-2.5">
        <div class="group relative flex size-[1.35rem] items-center rounded-full p-1 transition-all duration-200 hover:bg-blue-200 hover:shadow-md active:bg-blue-300 active:shadow-inner">
          <img
            src="src/assets/edit.svg"
            alt="edit icon"
            class="size-full transition-all duration-200 group-hover:scale-110"
          />
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            Edit
          </span>
        </div>
        <div class="group relative flex size-[1.35rem] items-center rounded-full p-1 transition-all duration-200 hover:bg-blue-200 hover:shadow-md active:bg-blue-300 active:shadow-inner">
          <img
            src="src/assets/add.svg"
            alt="add icon"
            class="size-full transition-all duration-200 group-hover:scale-110"
          />
          <span class="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
            Add
          </span>
        </div>
      </div>
    </div>
  )
}
