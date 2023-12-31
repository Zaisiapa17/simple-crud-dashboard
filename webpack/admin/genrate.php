<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>generate page</title>

    <!-- Google Font: Source Sans Pro -->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <!-- /.Google Font: Source Sans Pro -->

    <!-- bootstrap framework -->
    <link rel="stylesheet" href="assets/framework/bootstrap-4.6.2-dist/css/bootstrap.min.css">
    <!-- /.bootstrap framework -->

    <!-- font awesome icon -->
    <link rel="stylesheet" href="assets/plugin/fontawesome-free/css/all.min.css">
    <!-- /.font awesome icon -->

    <!-- Select2 plugin -->
    <link rel="stylesheet" href="assets/plugin/select2/css/select2.min.css">
    <link rel="stylesheet" href="assets/plugin/select2-bootstrap4-theme/select2-bootstrap4.min.css">
    <!-- /.Select2 plugin -->

    <!-- file input plugin -->
    <link rel="stylesheet" href="assets/plugin/Customizable-File-Input-Button/fileinput.css">
    <!-- /.file input plugin -->

    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="assets/plugin/overlayScrollbars/css/OverlayScrollbars.min.css">

    <!-- adminLTE theme -->
    <link rel="stylesheet" href="assets/plugin/AdminLTE-3.2.0/dist/css/adminlte.min.css">
    <!-- /.adminLTE theme -->

    <!-- original css dev -->
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- /.original css dev -->

</head>

<body class="hold-transition sidebar-mini layout-fixed">

    <!-- Site wrapper -->
    <div class="wrapper">
        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light fixed-top">
            <!-- Left navbar links -->
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i>
                        Menu</a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
            <!-- Brand Logo -->
            <a href="../../index3.html" class="brand-link">
                <span class="brand-text font-weight-light">AdminLTE 3</span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image"> -->
                    </div>
                    <div class="info">
                        <a href="#" class="d-block">Alexander Pierce</a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                <nav class="mt-2">
                    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">
                        <!-- Add icons to the links using the .nav-icon class with font-awesome or any other icon font library -->
                        <li class="nav-header">MENU</li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-custom-dev nav-custom-dev active">
                                <i class="nav-icon fas fa-home"></i>
                                <p>
                                    Beranda
                                </p>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-custom-dev" onclick="MahasiswaModule.load()">
                                <i class="nav-icon fas fa-user-graduate"></i>
                                <p>
                                    Mahasisiwa
                                </p>
                            </a>
                        </li>
                        <li class="nav-header">MASTER</li>
                        <li class="nav-item menu-open">
                            <a href="#" class="nav-link nav-custom-dev">
                                <i class="nav-icon fas fa-database"></i>
                                <p>
                                    Alamat Master
                                    <i class="right fas fa-angle-left"></i>
                                </p>
                            </a>
                            <ul class="nav nav-treeview">
                                <li class="nav-item">
                                    <a href="#" class="nav-link nav-custom-dev" onclick="ProvinsiModule.load()">
                                        <i class="fas fa-map-marker-alt nav-icon"></i>
                                        <p>Provinsi</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link nav-custom-dev" onclick="KabupatenModule.load()">
                                        <i class="fas fa-map-marker-alt nav-icon"></i>
                                        <p>Kabupaten</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link nav-custom-dev" onclick="KecamatanModule.load()">
                                        <i class="fas fa-map-marker-alt nav-icon"></i>
                                        <p>Kecamatan</p>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link nav-custom-dev" onclick="DesaModule.load()">
                                        <i class="fas fa-map-marker-alt nav-icon"></i>
                                        <p>Desa</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link nav-custom-dev" onclick="MatkulModule.load()">
                                <i class="nav-icon fas fa-database"></i>
                                <p>
                                    Matkul Master
                                </p>
                            </a>
                        </li>
                    </ul>
                </nav>
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <!-- Content Header (Page header) -->
            <section class="content-header">
                <div class="container-fluid get-fixed-dev">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1>.</h1>
                        </div>
                    </div>
                </div>
                <div class="container-fluid pt-3 head-name-title-dev">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1>Fixed Layout</h1>
                        </div>
                    </div>
                </div>
                <!-- /.container-fluid -->
            </section>

            <!-- Main content -->
            <div class="px-3" id="main-content-dev">
                <!-- modal add Desa -->
                <div class="modal fade" id="staticBackdrop-add" data-backdrop="static" data-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Tambah Desa</h5>
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
                                                    <label>Provinsi</label>
                                                    <select class="form-control select2-search-box-add"
                                                        id="provinsi-add"
                                                        onchange="DesaModule.validatorSelect('add', 'button-add', 'provinsi-add')">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Kabupaten</label>
                                                    <select class="form-control select2-search-box-add"
                                                        id="kabupaten-add"
                                                        onchange="DesaModule.validatorSelect('add', 'button-add', 'kabupaten-add')">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Kecamatan</label>
                                                    <select class="form-control select2-search-box-add"
                                                        id="kecamatan-add"
                                                        onchange="DesaModule.validatorSelect('add', 'button-add', 'kecamatan-add')">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="tambahNama">Nama Desa</label>
                                                    <input type="text" class="form-control" id="name-add"
                                                        placeholder="Nama Desa"
                                                        oninput="DesaModule.validatorName('name-add', 'button-add')"
                                                        maxlength="12" autocomplete="off">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i
                                        class="nav-icon fas fa-times mr-1"></i> Close</button>
                                <button type="button" class="btn btn-primary" onclick="DesaRequest.dataAdd()"
                                    id="button-add" disabled><i class="nav-icon fas fa-save mr-1"></i> Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal add Desa -->

                <!-- modal edit Desa -->
                <div class="modal fade" id="staticBackdrop-edit" data-backdrop="static" data-keyboard="false"
                    tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Edit Desa</h5>
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
                                                    <label>Provinsi</label>
                                                    <select class="form-control select2-search-box-edit"
                                                        id="provinsi-edit" onchange="">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Kabupaten</label>
                                                    <select class="form-control select2-search-box-edit"
                                                        id="kabupaten-edit" onchange="">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label>Kecamatan</label>
                                                    <select class="form-control select2-search-box-edit"
                                                        id="kecamatan-edit" onchange="">
                                                        <option></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <label for="tambahNama">Nama Desa</label>
                                                    <input type="hidden" class="form-control" id="mahasiswa-id">
                                                    <input type="text" class="form-control" id="name-edit"
                                                        placeholder="Nama Desa"
                                                        oninput="DesaModule.validatorName('name-edit', 'button-edit')">
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal"> <i
                                        class="nav-icon fas fa-times mr-1"></i> Close</button>
                                <button type="button" class="btn btn-primary" onclick="DesaRequest.dataEdit()"
                                    id="button-edit" disabled><i class="nav-icon fas fa-save mr-1"></i> Simpan</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.modal edit Desa -->

                <div class="row">
                    <div class="col-12">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h5 class="card-title m-0">
                                    <div class="d-flex flex-wrap align-items-center">
                                        <button type="button" class="btn btn-primary btn-sm m-1" data-toggle="modal"
                                            data-target="#staticBackdrop-add" onclick="">
                                            <i class="nav-icon fas fa-plus mr-1"></i>
                                            Tambah
                                        </button>
                                        <input class="form-control form-control-sm m-1" type="text"
                                            placeholder="cari data" style="min-width: 10%; max-width: 18%;">
                                        <select class="form-control" id="gender-filter"
                                            onchange="">
                                            <option></option>
                                            <option>laki</option>
                                            <option>perempuan</option>
                                        </select>
                                        <select class="form-control" id="profile-filter"
                                            onchange="">
                                            <option></option>
                                            <option>laki</option>
                                            <option>perempuan</option>
                                        </select>
                                        <select class="form-control" id="provinsi-filter"
                                            onchange="">
                                            <option></option>
                                            <option>laki</option>
                                            <option>perempuan</option>
                                        </select>
                                        <select class="form-control" id="kabupaten-filter"
                                            onchange="">
                                            <option></option>
                                            <option>laki</option>
                                            <option>perempuan</option>
                                        </select>
                                        <select class="form-control" id="kecamatan-filter"
                                            onchange="">
                                            <option></option>
                                            <option>laki</option>
                                            <option>perempuan</option>
                                        </select>
                                        <select class="form-control" id="desa-filter"
                                            onchange="">
                                            <option></option>
                                            <option>laki</option>
                                            <option>perempuan</option>
                                        </select>
                                        <button type="button" class="btn btn-primary btn-sm m-1"
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

            </div>


            <!-- space for footer-fixed bottom -->
            <section class="content-header get-fixed-dev">
                <div class="container-fluid pb-3">
                    <div class="row mb-2">
                        <div class="col-sm-12">
                            <h1>.</h1>
                        </div>
                    </div>
                </div>
            </section>

            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->

        <footer class="main-footer fixed-bottom">
            <div class="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
            </div>
            <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights
            reserved.
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery library -->
    <script src="libraries/jquery/jquery.min.js"></script>
    <!-- /.jQuery library -->

    <!-- bootstrap framework-->
    <script src="assets/framework/bootstrap-4.6.2-dist/js/bootstrap.bundle.min.js"></script>
    <!-- /.bootstrap framework-->

    <!-- overlayScrollbars -->
    <script src="assets/plugin/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <!-- /.overlayScrollbars -->

    <!-- adminLTE theme -->
    <script src="assets/plugin/AdminLTE-3.2.0/dist/js/adminlte.min.js"></script>
    <!-- /.adminLTE theme -->

    <!-- ajax for master master_mahasiswa -->
    <script src="script/master_mahasiswa/js/ajax.js"></script>
    <!-- /.ajax for master master_mahasiswa -->

    <!-- ajax for master master_provinsi -->
    <script src="script/master_provinsi/js/ajax.js"></script>
    <!-- /.ajax for master master_provinsi -->

    <!-- ajax for master master_kabupaten -->
    <script src="script/master_kabupaten/js/ajax.js"></script>
    <!-- /.ajax for master master_kabupaten -->

    <!-- ajax for master master_kecamatan -->
    <script src="script/master_kecamatan/js/ajax.js"></script>
    <!-- /.ajax for master master_kecamatan -->

    <!-- ajax for master master_desa -->
    <script src="script/master_desa/js/ajax.js"></script>
    <!-- /.ajax for master master_desa -->

    <!-- ajax for master master_matkul -->
    <script src="script/master_matkul/js/ajax.js"></script>
    <!-- /.ajax for master master_matkul -->

    <!-- original javascript dev -->
    <script src="assets/js/script.js"></script>
    <!-- original javascript dev -->

    <!-- file input plugin -->
    <script src="assets/plugin/Customizable-File-Input-Button/fileinput.js"></script>
    <!-- /.file input plugin -->

    <!-- select2 plugin -->
    <script src="assets/plugin/select2/js/select2.full.min.js"></script>
    <!-- /.select2 plugin -->


    <script>
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


        let typing_time_out;

        function validatorCode(inputId, buttonId) {
            if (typing_time_out) {
                clearTimeout(typing_time_out);
            }

            typing_time_out = setTimeout(function () {
                const input_value = $("#" + inputId).val();

                // Gunakan ekspresi reguler untuk mencocokkan karakter yang bukan huruf, angka, atau spasi
                const regex = /[^A-Za-z0-9\s]/;

                // Memeriksa apakah ada karakter khusus yang tidak diizinkan dalam input
                if (!regex.test(input_value)) {
                    // Memeriksa apakah ada angka dalam input
                    const has_number = /^[0-9]+$/.test(input_value);

                    if (has_number) {
                        // Jika input hanya berisi angka, maka input valid
                        $("#" + buttonId).prop("disabled", false);
                        $("#" + inputId).removeClass("is-invalid");
                        $("#" + inputId).addClass("is-valid");
                        $("#feedback-" + inputId).remove();
                    } else {
                        // Jika input tidak hanya berisi angka, maka input tidak valid
                        $("#" + buttonId).prop("disabled", true);
                        $("#" + inputId).removeClass("is-valid");
                        $("#" + inputId).addClass("is-invalid");
                        if ($("#feedback-" + inputId).length > 0) {
                            $("#feedback-" + inputId).remove();
                        }
                        $("#" + inputId).after(`
                    <div id="feedback-${inputId}" class="invalid-feedback">
                    Kode harus berupa angka.
                    </div>
                `);
                        if (input_value == "") {
                            $("#" + inputId).removeClass("is-valid");
                            $("#" + inputId).removeClass("is-invalid");
                            $("#feedback-" + inputId).remove();
                        }
                    }

                } else {
                    // Lanjutkan dengan logika Anda jika input valid
                    $("#" + buttonId).prop("disabled", true);
                    $("#" + inputId).removeClass("is-valid");
                    $("#" + inputId).addClass("is-invalid");
                    if ($("#feedback-" + inputId).length > 0) {
                        $("#feedback-" + inputId).remove();
                    }
                    $("#" + inputId).after(`
                        <div id="feedback-${inputId}" class="invalid-feedback">
                        Nama tidak diperbolehkan mengandung karakter unik.
                        </div>
                    `);
                }
            }, 1000);
        }

        function validatorName(inputId, buttonId) {
            if (typing_time_out) {
                clearTimeout(typing_time_out);
            }

            typing_time_out = setTimeout(function () {
                const input_value = $("#" + inputId).val();

                // Gunakan ekspresi reguler untuk mencocokkan karakter yang bukan huruf, angka, atau spasi
                const regex = /[^A-Za-z0-9\.\s]/;

                // Memeriksa apakah ada karakter khusus yang tidak diizinkan dalam input
                if (!regex.test(input_value)) {
                    // Memeriksa apakah ada angka dalam input
                    const has_number = /[0-9]/.test(input_value);

                    if (!has_number) {
                        // Jika tidak ada angka dalam input, maka input valid
                        $("#" + buttonId).prop("disabled", false);
                        $("#" + inputId).removeClass("is-invalid");
                        $("#" + inputId).addClass("is-valid");
                        $("#feedback-" + inputId).remove();
                        if (input_value == "") {
                            $("#" + inputId).removeClass("is-valid");
                        }
                    } else {
                        // Jika ada angka dalam input, maka input tidak valid
                        $("#" + buttonId).prop("disabled", true);
                        $("#" + inputId).removeClass("is-valid");
                        $("#" + inputId).addClass("is-invalid");
                        if ($("#feedback-" + inputId).length > 0) {
                            $("#feedback-" + inputId).remove();
                        }
                        $("#" + inputId).after(`
                    <div id="feedback-${inputId}" class="invalid-feedback">
                    Nama tidak boleh mengandung angka.
                    </div>
                `);
                    }
                } else {
                    // Lanjutkan dengan logika Anda jika input valid
                    $("#" + buttonId).prop("disabled", true);
                    $("#" + inputId).removeClass("is-valid");
                    $("#" + inputId).addClass("is-invalid");
                    if ($("#feedback-" + inputId).length > 0) {
                        $("#feedback-" + inputId).remove();
                    }
                    $("#" + inputId).after(`
                        <div id="feedback-${inputId}" class="invalid-feedback">
                        Nama tidak diperbolehkan mengandung karakter unik.
                        </div>
                    `);
                }
            }, 1000);
        }

        // select2 plugin
        $('#gender-filter').select2({
            theme: 'bootstrap4',
            placeholder: "Jenis Kelamin",
            minimumResultsForSearch: -1,
            width: '150px',
        })
        
        $('#profile-filter').select2({
            theme: 'bootstrap4',
            placeholder: "Profile",
            minimumResultsForSearch: -1,
            width: '150px'
        })

        $('#provinsi-filter').select2({
            theme: 'bootstrap4',
            placeholder: "Provinsi",
            width: '150px'
        })

        $('#kabupaten-filter').select2({
            theme: 'bootstrap4',
            placeholder: "Kabupaten",
            width: '150px'
        })

        $('#kecamatan-filter').select2({
            theme: 'bootstrap4',
            placeholder: "Kecamatan",
            width: '150px'
        })

        $('#desa-filter').select2({
            theme: 'bootstrap4',
            placeholder: "Desa",
            width: '150px'
        })

    </script>

</body>

</html>