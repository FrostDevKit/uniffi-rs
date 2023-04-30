window.SIDEBAR_ITEMS = {"attr":[["constructor","A dummy macro that does nothing."],["export",""]],"constant":[["CALLBACK_ERROR",""],["CALLBACK_SUCCESS",""],["CALLBACK_UNEXPECTED_ERROR",""],["IDX_CALLBACK_FREE","The method index used by the Drop trait to communicate to the foreign language side that Rust has finished with it, and it can be deleted from the handle map."]],"derive":[["Enum",""],["Error",""],["Object",""],["Record",""]],"fn":[["check_compatible_version","Check whether the uniffi runtime version is compatible a given uniffi_bindgen version."],["check_remaining","A helper function to ensure we don’t read past the end of a buffer."],["checksum_metadata",""],["lower_anyhow_error_or_panic","Helper function to lower an `anyhow::Error` that’s wrapping an error type"],["rust_call","Handle a scaffolding calls"],["uniffi_rustbuffer_alloc","This helper allocates a new byte buffer owned by the Rust code, and returns it to the foreign-language code as a `RustBuffer` struct. Callers must eventually free the resulting buffer, either by explicitly calling [`uniffi_rustbuffer_free`] defined below, or by passing ownership of the buffer back into Rust code."],["uniffi_rustbuffer_free","Free a byte buffer that had previously been passed to the foreign language code."],["uniffi_rustbuffer_from_bytes","This helper copies bytes owned by the foreign-language code into a new byte buffer owned by the Rust code, and returns it as a `RustBuffer` struct. Callers must eventually free the resulting buffer, either by explicitly calling the destructor defined below, or by passing ownership of the buffer back into Rust code."],["uniffi_rustbuffer_reserve","Reserve additional capacity in a byte buffer that had previously been passed to the foreign language code."],["uniffi_rustfuture_drop","Drop a [`RustFuture`]."],["uniffi_rustfuture_poll","Poll a [`RustFuture`]. If the `RustFuture` is ready, the function returns `true` and puts the result inside `polled_result`, otherwise it returns `false` and doesn’t modify the value inside `polled_result`. A third case exists: if the `RustFuture` is throwing an error, the function returns `true` but doesn’t modify `polled_result` either, however the value of  `call_status` is changed appropriately. It is summarized inside the following table:"]],"macro":[["assert_compatible_version","Assert that the uniffi runtime version matches an expected value."],["build_foreign_language_testcases","A macro to build testcases for a component’s generated bindings."],["ffi_converter_default_return","Macro to implement returning values by simply lowering them and returning them"],["ffi_converter_forward","Macro to implement `FfiConverter<T>` for a type by forwording all calls to another type"],["ffi_converter_rust_buffer_lift_and_lower","Macro to implement lowering/lifting using a `RustBuffer`"],["ffi_converter_trait_decl","Macro to implement `FfiConverter<T>` for a trait"],["generate_and_include_scaffolding","A helper macro to generate and include component scaffolding."],["include_scaffolding","A helper macro to include generated component scaffolding."]],"mod":[["deps",""],["ffi","Types that can cross the FFI boundary."],["metadata","Pack UniFFI interface metadata into byte arrays"]],"struct":[["ForeignBytes","Support for reading a slice of foreign-language-allocated bytes over the FFI."],["ForeignCallbackInternals","Struct to hold a foreign callback."],["MetadataBuffer",""],["RustBuffer","Support for passing an allocated-by-Rust buffer of bytes over the FFI."],["RustCallStatus","Represents the success/error of a rust call"],["RustFuture","`RustFuture` represents a [`Future`] that can be sent over FFI safely-ish."],["UnexpectedUniFFICallbackError","Used when internal/unexpected error happened when calling a foreign callback, for example when a unknown exception is raised"]],"trait":[["FfiConverter","Trait defining how to transfer values via the FFI layer."],["FfiDefault",""],["Interface","Implemented for exported interface types"]],"type":[["ForeignCallback","ForeignCallback is the Rust representation of a foreign language function. It is the basis for all callbacks interfaces. It is registered exactly once per callback interface, at library start up time. Calling this method is only done by generated objects which mirror callback interfaces objects in the foreign language."],["Result","`Result<T, Error>`"],["RustFutureForeignWakerFunction","Type alias to a function with a C ABI. It defines the shape of the foreign language’s waker which is called by the [`RustFuture`] to signal the foreign language that something has happened. See the module documentation to learn more."]]};