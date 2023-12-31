// test ajax master_provinsi

var ProvinsiModule = (function() {

    function load() {
        buildStructure();
        ProvinsiRequest.fetchDataAndRender(1);
        console.log('provinsi module loaded');
    }

    function buildStructure() {
        $(".head-name-title-dev").removeClass("d-none");
        $(".head-name-title-dev h1").text("Tabel Provinsi");
        $(".content-wrapper").LoadingOverlay("show", {
            background: "rgba(0, 0, 0, 0.5)",
            image: "",
            fontawesome: "fa fa-cog fa-spin"
        });

        $("#main-content-dev").html('');
        $("#main-content-dev").append(`
        <!-- modal add Matkul -->
        <div class="modal fade" id="staticBackdrop-add" data-backdrop="static" data-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Tambah Provinsi</h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i
                                class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                            <form action="">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="tambahNama">Nama</label>
                                            <input type="text" class="form-control" id="name-add"
                                                placeholder="Nama Provinsi" oninput="ProvinsiModule.validators('name_add')"
                                                maxlength="25" autocomplete="off">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i
                            class="nav-icon fas fa-times mr-1"></i> Close</button>
                        <button type="button" class="btn btn-primary" onclick="ProvinsiRequest.dataAdd()"
                            id="button-add" disabled><i class="nav-icon fas fa-save mr-1"></i> Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal add Matkul -->

        <!-- modal edit Matkul -->
        <div class="modal fade" id="staticBackdrop-edit" data-backdrop="static" data-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit Provinsi</h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i
                                class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="tambahNama">Nama</label>
                                        <input type="hidden" class="form-control" id="provinsi-id">
                                        <input type="text" class="form-control" id="name-edit"
                                            placeholder="Nama Provinsi" oninput="ProvinsiModule.validators('name_edit')">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i
                                class="nav-icon fas fa-times mr-1"></i> Close</button>
                        <button type="button" class="btn btn-primary" onclick="ProvinsiRequest.dataEdit()"  id="button-edit" disabled><i
                                class="nav-icon fas fa-save mr-1"></i> Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal edit Matkul -->

        <!-- modal hapus Matkul -->
        <div class="modal fade" id="staticBackdrop-delete" data-backdrop="static" data-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="false">
            <div class="modal-dialog modal-sm modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Hapus Matakuiah</h5>
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal"><i class="fas fa-times"></i></button> -->
                    </div>
                    <div class="modal-body">
                        <div class="container">
                        <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                        yakin akan dihapus?
                        </div>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i
                            class="nav-icon fas fa-times mr-1"></i> Close</button>
                        <button type="button" class="btn btn-primary" id="button-delete"><i class="nav-icon fas fa-trash-alt mr-1"></i> Hapus</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal hapus Matkul -->
        
        <!-- main content -->
        <div class="row" id="row-1-dev">
            <div class="col-12">
                <div class="card card-primary card-outline">
                    <div class="card-header pb-sm-3">
                        <h5 class="card-title m-0">
                            <div class="d-flex flex-wrap align-items-center">
                                <button type="button" class="btn btn-primary btn-sm mr-2 mt-2"
                                    data-toggle="modal" data-target="#staticBackdrop-add" onclick="ProvinsiModule.resetModalAdd()">
                                    <i class="nav-icon fas fa-plus mr-1"></i>
                                    Tambah
                                </button>
                            </div>
                        </h5>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table
                                class="table table-striped table-bordered table-hover text-nowrap text-center mx-auto"
                                id="data-table">
                                <thead style="color: #3d3d3d;">
                                    <th>No</th>
                                    <th>Nama Provinsi</th>
                                    <th>Total Kabupaten</th>
                                    <th>Total Kecamatan</th>
                                    <th>Total Desa</th>
                                    <th>Total Data</th>
                                    <th>Aksi</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <!-- AJAX -->
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent">
                        <div class="d-flex justify-content-between align-items-center">
                            <nav aria-label="..." id="pagination-links">
                                <!-- ajax -->
                            </nav>
                            <button type="button" class="btn btn-primary btn-sm"
                                onclick="fetchDataAndRenderReload()">
                                <i class="nav-icon fas fa-redo mr-1"></i>
                                Perbarui Tabel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.main content -->

        `);
    }

    function buildUrl(page) {
        let url = `script/master_provinsi/php/get_data.php?page=${page}`;
        return url;
    }

    function renderData(data, current_page) {
        const table = document.getElementById("data-table");
        const tbody = table.querySelector("tbody");
        tbody.innerHTML = ""; // Clear the existing table body content

        const startNumber = (current_page - 1) * 5;

        data.forEach(function (row, index) {
            const new_row = document.createElement("tr");
            const bac_color_number_class = row.total_rows > 0 ? "badge badge-warning" : "badge badge-danger";

            new_row.innerHTML = `
                <td class="text-center align-middle">${startNumber + index + 1}</td>
                <td class="text-center align-middle">${row.name}</td>
                <td class="text-center align-middle">${row.total_kabupaten}</td>
                <td class="text-center align-middle">${row.total_kecamatan}</td>
                <td class="text-center align-middle">${row.total_desa}</td>
                <td class="text-center align-middle">${row.total_data}</td>
                <td class="p-sm-2 text-center align-middle">
                <!-- Button with a click event to open the modal -->
                <button type="button" class="btn btn-secondary btn-sm bg-primary border-0" onclick="ProvinsiModule.showModalDelete(${row.id})" data-placement="top" title="hapus">
                <i class="nav-icon fas fa-trash fa-sm"></i>
                </button>
        
                <button type="button" class="btn btn-secondary btn-sm ml-sm-1 bg-primary border-0" onclick="ProvinsiRequest.loadDataEdit(${row.id})" data-toggle="modal" data-target="#staticBackdrop-edit" data-placement="top" title="edit">
                    <i class="nav-icon fas fa-pen fa-sm"></i>
                </button>
                </td>
            `;

            tbody.appendChild(new_row);
        });
    }

    function renderPagination(total_pages, current_page) {
        const paginationLinks = document.getElementById("pagination-links");
        paginationLinks.innerHTML = "";

        const ul = document.createElement("ul");
        ul.classList.add("pagination", "pagination-sm", "m-0");

        const prevLi = document.createElement("li");
        prevLi.classList.add("page-item");
        if (current_page === 1) {
            prevLi.classList.add("disabled");
        }
        const prevLink = document.createElement("a");
        prevLink.classList.add("page-link");
        prevLink.href = "javascript:void(0)";
        prevLink.textContent = "Sebelumnya";
        prevLi.appendChild(prevLink);
        ul.appendChild(prevLi);

        for (let i = 1; i <= total_pages; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            if (i === current_page) {
                li.classList.add("active");
            }
            const link = document.createElement("a");
            link.classList.add("page-link");
            link.href = "javascript:void(0)";
            link.textContent = i;
            li.appendChild(link);
            ul.appendChild(li);

            link.addEventListener("click", function () {
                $(".content-wrapper").LoadingOverlay("show", {
                    background: "rgba(0, 0, 0, 0.5)",
                    image: "",
                    fontawesome: "fa fa-cog fa-spin"
                });
                ProvinsiRequest.fetchDataAndRender(i);
            });
        }

        const nextLi = document.createElement("li");
        nextLi.classList.add("page-item");
        if (current_page === total_pages) {
            nextLi.classList.add("disabled");
        }
        const nextLink = document.createElement("a");
        nextLink.classList.add("page-link");
        nextLink.href = "javascript:void(0)";
        nextLink.textContent = "Berikutnya";
        nextLi.appendChild(nextLink);
        ul.appendChild(nextLi);

        prevLink.addEventListener("click", function () {
            if (current_page > 1) {
                $(".content-wrapper").LoadingOverlay("show", {
                    background: "rgba(0, 0, 0, 0.5)",
                    image: "",
                    fontawesome: "fa fa-cog fa-spin"
                });
                ProvinsiRequest.fetchDataAndRender(current_page - 1);
            }
        });

        nextLink.addEventListener("click", function () {
            if (current_page < total_pages) {
                $(".content-wrapper").LoadingOverlay("show", {
                    background: "rgba(0, 0, 0, 0.5)",
                    image: "",
                    fontawesome: "fa fa-cog fa-spin"
                });
                ProvinsiRequest.fetchDataAndRender(current_page + 1);
            }
        });

        paginationLinks.appendChild(ul);
    }

    function resetModalAdd() {
        // Select all input elements inside the modal
        $('#staticBackdrop-add input').each(function () {
            // Clear the input value
            $(this).val('');
        });
        $("#feedback-name-add").remove();
        $("#name-add").removeClass("is-valid");
        $("#name-add").removeClass("is-invalid");
        $("#button-add").prop("disabled", true);

    }
    function aplyValueModalEdit(data) {

        $("#provinsi-id").val(data[0].id);
        $("#name-edit").val(data[0].name);

        validators('name_edit');
        $("#button-edit").prop("disabled", false);
    }

    function showModalDelete(id) {
        $("#button-delete").attr("onclick", "ProvinsiRequest.dataDelete(" + id + ")");
        $('#staticBackdrop-delete').modal('show');
    }

    // validation function //

    function validators(input_modal) {

        // const hasNumber = (value) => {
        //     const validator = /^[0-9]+$/.test(value);
        //     return validator;
        // }

        const hasLetter = (value) => {
            const validator = /^[A-Za-z ]+$/.test(value);
            return validator;
        }

        const hasEmpty = (value) => {
            const validator = /^\s*$/.test(value);
            return validator;
        }

        // const resetSelectOptions = (target_select) => {
        //     target_select.html('<option value=""></option>');
        //     target_select.removeClass("is-valid");
        // }

        if (input_modal === 'name_add') {
            const input_element_value = $("#name-add").val();
            if (hasLetter(input_element_value)) {
                $("#name-add").removeClass("is-invalid");
                $("#feedback-name-add").remove();
                $("#name-add").addClass("is-valid");
                $("#button-add").prop("disabled", false);
            } else if (hasEmpty(input_element_value)) {
                $("#name-add").removeClass("is-valid");
                $("#name-add").removeClass("is-invalid");
                $("#feedback-name-add").remove();
                $("#button-add").prop("disabled", true);
            } else {
                $("#button-add").prop("disabled", true);
                $("#name-add").removeClass("is-valid");
                $("#name-add").addClass("is-invalid");
                if ($("#feedback-name-add").length > 0) {
                    $("#feedback-name-add").remove();
                }
                $("#name-add").after(`
                            <div id="feedback-name-add" class="invalid-feedback">
                            Nama harus berupa huruf.
                            </div>
                        `);
            }

        } else if (input_modal === 'name_edit') {
            const input_element_value = $("#name-edit").val();
            if (hasLetter(input_element_value)) {
                $("#name-edit").removeClass("is-invalid");
                $("#feedback-name-edit").remove();
                $("#name-edit").addClass("is-valid");
                $("#button-edit").prop("disabled", false);
            } else if (hasEmpty(input_element_value)) {
                $("#name-edit").removeClass("is-valid");
                $("#name-edit").removeClass("is-invalid");
                $("#feedback-name-edit").remove();
                $("#button-edit").prop("disabled", true);
            } else {
                $("#button-edit").prop("disabled", true);
                $("#name-edit").removeClass("is-valid");
                $("#name-edit").addClass("is-invalid");
                if ($("#feedback-name-edit").length > 0) {
                    $("#feedback-name-edit").remove();
                }
                $("#name-edit").after(`
                            <div id="feedback-name-edit" class="invalid-feedback">
                            Nama harus berupa huruf.
                            </div>
                        `);
            }
        }

    }
    
    return {
        load: load,
        buildUrl: buildUrl,
        renderData: renderData,
        renderPagination: renderPagination,
        resetModalAdd: resetModalAdd,
        aplyValueModalEdit: aplyValueModalEdit,
        showModalDelete: showModalDelete,
        validators
    };
})();