// modul master_mahasiswa

var MahasiswaModule = (function() {

    function load() {
        buildStructure();
        MahasiswaRequest.fetchDataAndRender(1);
        console.log('mahasiswa module loaded');
    }

    function buildStructure() {
        $(".head-name-title-dev").removeClass("d-none");
        $(".head-name-title-dev h1").text("Tabel Mahasiswa");
        $(".content-wrapper").LoadingOverlay("show", {
            background  : "rgba(0, 0, 0, 0.5)",
            image       : "",
            fontawesome : "fa fa-cog fa-spin"
        });

        $("#main-content-dev").html('');
        $("#main-content-dev").append(`
        <!-- modal add mahasiswa -->
        <div class="modal fade" id="staticBackdrop-add" data-backdrop="static" data-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Tambah Mahasiswa Test</h5>
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
                                            <label for="tambahKode">Kode</label>
                                            <input type="email" class="form-control" id="kode-add"
                                                placeholder="Kode Mahasiswa" oninput="MahasiswaModule.validatorCodeAdd()">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label for="tambahNama">Nama</label>
                                            <input type="email" class="form-control" id="name-add"
                                                placeholder="Nama Mahasiswa" oninput="MahasiswaModule.validatorNameAdd()"
                                                maxlength="12">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Jenis Kelamin</label>
                                            <select class="form-control select2-default" id="gender-add">
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <!-- Columns are always 50% wide, on mobile and desktop -->
                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Provinsi</label>
                                            <select class="form-control select2-search-box" id="provinsi-add">
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Kabupaten</label>
                                            <select class="form-control select2-search-box" id="kabupaten-add">
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Kecamatan</label>
                                            <select class="form-control select2-search-box" id="kecamatan-add">
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label>Desa</label>
                                            <select class="form-control select2-search-box" id="desa-add">
                                                <option selected="selected">Alabama</option>
                                                <option>Alaska</option>
                                                <option>California</option>
                                                <option>Delaware</option>
                                                <option>Tennessee</option>
                                                <option>Texas</option>
                                                <option>Washington</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group m-0">
                                            <label for="exampleFormControlInput1" class="m-0">Foto
                                                Profile</label>
                                        </div>
                                        <span class="fileinput-wrapper file-selected mt-2">
                                            <input type="file" name="file" id="image-add">
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i
                                class="nav-icon fas fa-times mr-1"></i> Close</button>
                        <button type="button" class="btn btn-primary" onclick="tambahDataPersonal()"
                            id="button-add"><i class="nav-icon fas fa-save mr-1"></i> Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal add mahasiswa -->

        <!-- modal edit mahasiswa -->
        <div class="modal fade" id="staticBackdrop-edit" data-backdrop="static" data-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit Mahasiswa</h5>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"><i
                                class="fas fa-times"></i></button>
                    </div>
                    <div class="modal-body">
                        <div class="container">
                            <!-- Stack the columns on mobile by making one full-width and the other half-width -->
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="tambahKode">Kode</label>
                                        <input type="email" class="form-control" id="kode-edit"
                                            placeholder="Kode Mahasiswa" oninput="MahasiswaModule.validatorCodeEdit()">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="tambahNama">Nama</label>
                                        <input type="email" class="form-control" id="name-edit"
                                            placeholder="Nama Mahasiswa" oninput="MahasiswaModule.validatorNameEdit()">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Jenis Kelamin</label>
                                        <select class="form-control select2-default" id="gender-edit">
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <!-- Columns are always 50% wide, on mobile and desktop -->
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Provinsi</label>
                                        <select class="form-control select2-search-box" id="provinsi-edit">
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Kabupaten</label>
                                        <select class="form-control select2-search-box" id="kabupaten-edit">
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Kecamatan</label>
                                        <select class="form-control select2-search-box" id="kecamatan-edit">
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label>Desa</label>
                                        <select class="form-control select2-search-box" id="desa-edit">
                                            <option selected="selected">Alabama</option>
                                            <option>Alaska</option>
                                            <option>California</option>
                                            <option>Delaware</option>
                                            <option>Tennessee</option>
                                            <option>Texas</option>
                                            <option>Washington</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group m-0">
                                        <label for="exampleFormControlInput1" class="m-0">Foto Profile</label>
                                    </div>
                                    <span class="fileinput-wrapper file-selected mt-2">
                                        <input type="file" name="file" id="image-edit">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i
                                class="nav-icon fas fa-times mr-1"></i> Close</button>
                        <button type="button" class="btn btn-primary" onclick="tambahDataPersonal()"  id="button-edit"><i
                                class="nav-icon fas fa-save mr-1"></i> Simpan</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.modal edit mahasiswa -->

        <div class="row" id="row-1-dec">
            <div class="col-12">
                <div class="card card-primary card-outline">
                    <div class="card-header pb-sm-3">
                        <h5 class="card-title m-0">
                            <div class="d-flex flex-wrap align-items-center">
                                <button type="button" class="btn btn-primary btn-sm mr-2 mt-2"
                                    data-toggle="modal" data-target="#staticBackdrop-add" onclick="">
                                    <i class="nav-icon fas fa-plus mr-1"></i>
                                    Tambah
                                </button>
                                <button type="button" class="btn btn-primary btn-sm mr-2 mt-2"
                                    onclick="clearFilter()">
                                    <i class="nav-icon fas fa-sync-alt mr-1"></i>
                                    bersihkan filter
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
                                    <th>Foto Profile</th>
                                    <th>kode</th>
                                    <th>Nama</th>
                                    <th>Jenis kelamin</th>
                                    <th>Matkul</th>
                                    <th>Alamat</th>
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
        `);

        $('.select2-search-box').select2({
            theme: 'bootstrap4',
            dropdownParent: $("#staticBackdrop-add"),
        })
        $('.select2-default').select2({
            theme: 'bootstrap4',
            dropdownParent: $("#staticBackdrop-add"),
            minimumResultsForSearch: -1
        })
        $('input[type="file"]').fileinput({
            title: '<i class="fas fa-upload mr-1"></i> Upload Profile',
            buttonClass: 'btn btn-danger',
        });
    }

    function buildUrl(page, keyword, jenisKelamin, imageProfile, provinsi, kabupaten, kecamatan, desa, matkulFilter) {
        let url = `script/master_mahasiswa/php/get_data.php?page=${page}`;
        if (keyword) {
            url += `&keyword=${encodeURIComponent(keyword)}`;
        }
        if (jenisKelamin) {
            url += `&jenis_kelamin=${encodeURIComponent(jenisKelamin)}`;
        }
        if (imageProfile) {
            url += `&image_profile=${encodeURIComponent(imageProfile)}`;
        }
        if (provinsi) {
            url += `&provinsiFilter=${encodeURIComponent(provinsi)}`;
        }
        if (kabupaten) {
            url += `&kabupatenFilter=${encodeURIComponent(kabupaten)}`;
        }
        if (kecamatan) {
            url += `&kecamatanFilter=${encodeURIComponent(kecamatan)}`;
        }
        if (desa) {
            url += `&desaFilter=${encodeURIComponent(desa)}`;
        }
        if (matkulFilter) {
            url += `&matkulFilter=${encodeURIComponent(matkulFilter)}`;
        }
        return url;
    }

    function renderData(data, currentPage) {
        const table = document.getElementById("data-table");
        const tbody = table.querySelector("tbody");
        tbody.innerHTML = ""; // Clear the existing table body content

        const startNumber = (currentPage - 1) * 5;

        data.forEach(function (row, index) {
            const newRow = document.createElement("tr");
            const bacColorNumberClass = row.total_rows > 0 ? "badge badge-warning" : "badge badge-danger" ;
            
            newRow.innerHTML = `
                <td class="text-center align-middle">${startNumber + index + 1}</td>
                <td class="text-center align-middle"><img class="img-thumbnail" src="docs/img/${row.image_profile}" alt="" width="40px"></td>
                <td class="text-center align-middle">${row.kode}</td>
                <td class="text-center align-middle">${row.nama}</td>
                <td class="text-center align-middle">${row.jenis_kelamin}</td>
                <td class="text-center align-middle">
                <a href="javascript:void(0)" class="${bacColorNumberClass}" onclick="tampilModalMahasiswaSubPage(${row.id_personal_name})">${row.total_rows}</a>
                </td>
                <td class="text-center align-middle">${row.nama_desa}, ${row.nama_kecamatan}, ${row.nama_kabupaten}, ${row.nama_provinsi}</td>
                <td class="p-sm-2 text-center align-middle">
                <!-- Button with a click event to open the modal -->
                <button type="button" class="btn btn-secondary btn-sm bg-primary border-0" onclick="tampilModalMahasiswa(${row.id_personal_name})" data-placement="top" title="hapus">
                <i class="nav-icon fas fa-trash fa-sm"></i>
                </button>
        
                <button type="button" class="btn btn-secondary btn-sm ml-sm-1 bg-primary border-0" onclick="" data-toggle="modal" data-target="#staticBackdrop-edit" data-placement="top" title="edit">
                    <i class="nav-icon fas fa-pen fa-sm"></i>
                </button>
                </td>
            `;
            
            tbody.appendChild(newRow);
        });
    }

    function renderPagination(totalPages, currentPage) {
        const paginationLinks = document.getElementById("pagination-links");
        paginationLinks.innerHTML = "";

        const ul = document.createElement("ul");
        ul.classList.add("pagination", "pagination-sm", "m-0");

        const prevLi = document.createElement("li");
        prevLi.classList.add("page-item");
        if (currentPage === 1) {
            prevLi.classList.add("disabled");
        }
        const prevLink = document.createElement("a");
        prevLink.classList.add("page-link");
        prevLink.href = "javascript:void(0)";
        prevLink.textContent = "Sebelumnya";
        prevLi.appendChild(prevLink);
        ul.appendChild(prevLi);

        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.classList.add("page-item");
            if (i === currentPage) {
                li.classList.add("active");
            }
            const link = document.createElement("a");
            link.classList.add("page-link");
            link.href = "javascript:void(0)";
            link.textContent = i;
            li.appendChild(link);
            ul.appendChild(li);

            link.addEventListener("click", function () {
                // $.LoadingOverlay("show", {background  : "rgba(0, 0, 0, 0.5)"});
                // loadingBerhenti1Seccond();
                MahasiswaRequest.fetchDataAndRender(i);
            });
        }

        const nextLi = document.createElement("li");
        nextLi.classList.add("page-item");
        if (currentPage === totalPages) {
            nextLi.classList.add("disabled");
        }
        const nextLink = document.createElement("a");
        nextLink.classList.add("page-link");
        nextLink.href = "javascript:void(0)";
        nextLink.textContent = "Berikutnya";
        nextLi.appendChild(nextLink);
        ul.appendChild(nextLi);

        prevLink.addEventListener("click", function () {
            if (currentPage > 1) {
                // $.LoadingOverlay("show", {background  : "rgba(0, 0, 0, 0.5)"});
                // loadingBerhenti1Seccond();
                MahasiswaRequest.fetchDataAndRender(currentPage - 1);
            }
        });

        nextLink.addEventListener("click", function () {
            if (currentPage < totalPages) {
                // $.LoadingOverlay("show", {background  : "rgba(0, 0, 0, 0.5)"});
                // loadingBerhenti1Seccond();
                MahasiswaRequest.fetchDataAndRender(currentPage + 1);
            }
        });

        paginationLinks.appendChild(ul);
    }

    // function validation //

    let typing_time_out;
    function validatorCodeAdd() {
        if (typing_time_out) {
            clearTimeout(typing_time_out);
        }

        typing_time_out = setTimeout(function () {
            const input_value = $("#kode-add").val();

            // Gunakan ekspresi reguler untuk mencocokkan karakter yang bukan huruf, angka, atau spasi
            const regex = /[^A-Za-z0-9\s]/;

            // Memeriksa apakah ada karakter khusus yang tidak diizinkan dalam input
            if (!regex.test(input_value)) {

                // Memeriksa apakah ada angka dalam input
                const has_number = /^[0-9]+$/.test(input_value);

                if (has_number) {
                    // Jika input hanya berisi angka, maka input valid
                    $("#button-add").prop("disabled", false);
                    $("#kode-add").removeClass("is-invalid");
                    $("#kode-add").addClass("is-valid");
                    $("#feedback-kode-add").remove();
                } else {
                    // Jika input tidak hanya berisi angka, maka input tidak valid
                    $("#button-add").prop("disabled", true);
                    $("#kode-add").removeClass("is-valid");
                    $("#kode-add").addClass("is-invalid");
                    if ($("#feedback-kode-add").length > 0) {
                        $("#feedback-kode-add").remove();
                    }
                    $("#kode-add").after(`
                        <div id="feedback-kode-add" class="invalid-feedback">
                        Kode harus berupa angka.
                        </div>
                    `);
                    if (input_value == "") {
                        $("#kode-add").removeClass("is-valid");
                        $("#kode-add").removeClass("is-invalid");
                        $("#feedback-kode-add").remove();
                    }
                }

            } else {
                // Lanjutkan dengan logika Anda jika input valid
                $("#button-add").prop("disabled", true);
                $("#kode-add").removeClass("is-valid");
                $("#kode-add").addClass("is-invalid");
                if ($("#feedback-kode-add").length > 0) {
                    $("#feedback-kode-add").remove();
                }
                $("#kode-add").after(`
                    <div id="feedback-kode-add" class="invalid-feedback">
                    Nama tidak diperbolehkan mengandung karakter unik.
                    </div>
                `);
            }
        }, 1000);
    }

    function validatorNameAdd() {
        if (typing_time_out) {
            clearTimeout(typing_time_out);
        }

        typing_time_out = setTimeout(function () {
            const input_value = $("#name-add").val();

            // Gunakan ekspresi reguler untuk mencocokkan karakter yang bukan huruf, angka, atau spasi
            const regex = /[^A-Za-z0-9\.\s]/;

            // Memeriksa apakah ada karakter khusus yang tidak diizinkan dalam input
            if (!regex.test(input_value)) {
                // Memeriksa apakah ada angka dalam input
                const has_number = /[0-9]/.test(input_value);

                if (!has_number) {
                    // Jika tidak ada angka dalam input, maka input valid
                    $("#button-add").prop("disabled", false);
                    $("#name-add").removeClass("is-invalid");
                    $("#name-add").addClass("is-valid");
                    $("#feedback-name-add").remove();
                    if (input_value == "") {
                        $("#name-add").removeClass("is-valid");
                    }
                } else {
                    // Jika ada angka dalam input, maka input tidak valid
                    $("#button-add").prop("disabled", true);
                    $("#name-add").removeClass("is-valid");
                    $("#name-add").addClass("is-invalid");
                    if ($("#feedback-name-add").length > 0) {
                        $("#feedback-name-add").remove();
                    }
                    $("#name-add").after(`
                <div id="feedback-name-add" class="invalid-feedback">
                Nama tidak boleh mengandung angka.
                </div>
            `);
                }
            } else {
                // Lanjutkan dengan logika Anda jika input valid
                $("#button-add").prop("disabled", true);
                $("#name-add").removeClass("is-valid");
                $("#name-add").addClass("is-invalid");
                if ($("#feedback-name-add").length > 0) {
                    $("#feedback-name-add").remove();
                }
                $("#name-add").after(`
            <div id="feedback-name-add" class="invalid-feedback">
            Nama tidak diperbolehkan mengandung karakter unik.
            </div>
        `);
            }
        }, 1000);
    }

    function validatorNameEdit() {
        if (typing_time_out) {
            clearTimeout(typing_time_out);
        }

        typing_time_out = setTimeout(function () {
            const input_value = $("#name-edit").val();

            // Gunakan ekspresi reguler untuk mencocokkan karakter yang bukan huruf, angka, atau spasi
            const regex = /[^A-Za-z0-9\.\s]/;

            // Memeriksa apakah ada karakter khusus yang tidak diizinkan dalam input
            if (!regex.test(input_value)) {
                // Memeriksa apakah ada angka dalam input
                const has_number = /[0-9]/.test(input_value);

                if (!has_number) {
                    // Jika tidak ada angka dalam input, maka input valid
                    $("#button-edit").prop("disabled", false);
                    $("#name-edit").removeClass("is-invalid");
                    $("#name-edit").addClass("is-valid");
                    $("#feedback-name-edit").remove();
                    if (input_value == "") {
                        $("#name-edit").removeClass("is-valid");
                    }
                } else {
                    // Jika ada angka dalam input, maka input tidak valid
                    $("#button-edit").prop("disabled", true);
                    $("#name-edit").removeClass("is-valid");
                    $("#name-edit").addClass("is-invalid");
                    if ($("#feedback-name-edit").length > 0) {
                        $("#feedback-name-edit").remove();
                    }
                    $("#name-edit").after(`
                <div id="feedback-name-edit" class="invalid-feedback">
                Nama tidak boleh mengandung angka.
                </div>
            `);
                }
            } else {
                // Lanjutkan dengan logika Anda jika input valid
                $("#button-edit").prop("disabled", true);
                $("#name-edit").removeClass("is-valid");
                $("#name-edit").addClass("is-invalid");
                if ($("#feedback-name-edit").length > 0) {
                    $("#feedback-name-edit").remove();
                }
                $("#name-edit").after(`
            <div id="feedback-name-edit" class="invalid-feedback">
            Nama tidak diperbolehkan mengandung karakter unik.
            </div>
        `);
            }
        }, 1000);
    }
    function validatorCodeEdit() {
        if (typing_time_out) {
            clearTimeout(typing_time_out);
        }

        typing_time_out = setTimeout(function () {
            const input_value = $("#kode-edit").val();

            // Gunakan ekspresi reguler untuk mencocokkan karakter yang bukan huruf, angka, atau spasi
            const regex = /[^A-Za-z0-9\s]/;

            // Memeriksa apakah ada karakter khusus yang tidak diizinkan dalam input
            if (!regex.test(input_value)) {
                // Memeriksa apakah ada angka dalam input
                const has_number = /^[0-9]+$/.test(input_value);

                if (has_number) {
                    // Jika input hanya berisi angka, maka input valid
                    $("#button-edit").prop("disabled", false);
                    $("#kode-edit").removeClass("is-invalid");
                    $("#kode-edit").addClass("is-valid");
                    $("#feedback-kode-edit").remove();
                } else {
                    // Jika input tidak hanya berisi angka, maka input tidak valid
                    $("#button-add").prop("disabled", true);
                    $("#kode-edit").removeClass("is-valid");
                    $("#kode-edit").addClass("is-invalid");
                    if ($("#feedback-kode-edit").length > 0) {
                        $("#feedback-kode-edit").remove();
                    }
                    $("#kode-edit").after(`
                        <div id="feedback-kode-edit" class="invalid-feedback">
                        Kode harus berupa angka.
                        </div>
                    `);
                    if (input_value == "") {
                        $("#kode-edit").removeClass("is-valid");
                        $("#kode-edit").removeClass("is-invalid");
                        $("#feedback-kode-edit").remove();
                    }
                }
            } else {
                // Lanjutkan dengan logika Anda jika input valid
                $("#button-edit").prop("disabled", true);
                $("#kode-edit").removeClass("is-valid");
                $("#kode-edit").addClass("is-invalid");
                if ($("#feedback-kode-edit").length > 0) {
                    $("#feedback-kode-edit").remove();
                }
                $("#kode-edit").after(`
                    <div id="feedback-kode-edit" class="invalid-feedback">
                    Nama tidak diperbolehkan mengandung karakter unik.
                    </div>
                `);
            }
        }, 1000);
    }

    return {
        load: load,
        buildUrl: buildUrl,
        renderData: renderData,
        renderPagination: renderPagination,
        validatorNameAdd: validatorNameAdd,
        validatorCodeAdd: validatorCodeAdd,
        validatorNameEdit: validatorNameEdit,
        validatorCodeEdit: validatorCodeEdit
    };

})();