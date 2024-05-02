namespace Jones_cc6
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.components = new System.ComponentModel.Container();
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            this.patientsBindingNavigator = new System.Windows.Forms.BindingNavigator(this.components);
            this.bindingNavigatorAddNewItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorCountItem = new System.Windows.Forms.ToolStripLabel();
            this.bindingNavigatorDeleteItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMoveFirstItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMovePreviousItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorSeparator = new System.Windows.Forms.ToolStripSeparator();
            this.bindingNavigatorPositionItem = new System.Windows.Forms.ToolStripTextBox();
            this.bindingNavigatorSeparator1 = new System.Windows.Forms.ToolStripSeparator();
            this.bindingNavigatorMoveNextItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorMoveLastItem = new System.Windows.Forms.ToolStripButton();
            this.bindingNavigatorSeparator2 = new System.Windows.Forms.ToolStripSeparator();
            this.patientsBindingNavigatorSaveItem = new System.Windows.Forms.ToolStripButton();
            this.patientsDataGridView = new System.Windows.Forms.DataGridView();
            this.closeButton = new System.Windows.Forms.Button();
            this.showAllButton = new System.Windows.Forms.Button();
            this.nameGroupBox = new System.Windows.Forms.GroupBox();
            this.nameSearchInput = new System.Windows.Forms.TextBox();
            this.nameSearchButton = new System.Windows.Forms.Button();
            this.addressGroupBox = new System.Windows.Forms.GroupBox();
            this.addressSearchInput = new System.Windows.Forms.TextBox();
            this.addressSearchButton = new System.Windows.Forms.Button();
            this.phoneGroupBox = new System.Windows.Forms.GroupBox();
            this.phoneSearchInput = new System.Windows.Forms.TextBox();
            this.phoneSearchButton = new System.Windows.Forms.Button();
            this.emailGroupBox = new System.Windows.Forms.GroupBox();
            this.emailSearchInput = new System.Windows.Forms.TextBox();
            this.emailSearchButton = new System.Windows.Forms.Button();
            this.groupBox4 = new System.Windows.Forms.GroupBox();
            this.deductibleLimitSearchInput = new System.Windows.Forms.TextBox();
            this.deductibleLimitSearchButton = new System.Windows.Forms.Button();
            this.dataGridViewTextBoxColumn1 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn2 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn3 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn4 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn5 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.dataGridViewTextBoxColumn6 = new System.Windows.Forms.DataGridViewTextBoxColumn();
            this.patientsBindingSource = new System.Windows.Forms.BindingSource(this.components);
            this.jonesMedicalDataSet = new Jones_cc6.JonesMedicalDataSet();
            this.patientsTableAdapter = new Jones_cc6.JonesMedicalDataSetTableAdapters.patientsTableAdapter();
            this.tableAdapterManager = new Jones_cc6.JonesMedicalDataSetTableAdapters.TableAdapterManager();
            this.clearButton = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.patientsBindingNavigator)).BeginInit();
            this.patientsBindingNavigator.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.patientsDataGridView)).BeginInit();
            this.nameGroupBox.SuspendLayout();
            this.addressGroupBox.SuspendLayout();
            this.phoneGroupBox.SuspendLayout();
            this.emailGroupBox.SuspendLayout();
            this.groupBox4.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.patientsBindingSource)).BeginInit();
            ((System.ComponentModel.ISupportInitialize)(this.jonesMedicalDataSet)).BeginInit();
            this.SuspendLayout();
            // 
            // patientsBindingNavigator
            // 
            this.patientsBindingNavigator.AddNewItem = this.bindingNavigatorAddNewItem;
            this.patientsBindingNavigator.BindingSource = this.patientsBindingSource;
            this.patientsBindingNavigator.CountItem = this.bindingNavigatorCountItem;
            this.patientsBindingNavigator.DeleteItem = this.bindingNavigatorDeleteItem;
            this.patientsBindingNavigator.ImageScalingSize = new System.Drawing.Size(20, 20);
            this.patientsBindingNavigator.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.bindingNavigatorMoveFirstItem,
            this.bindingNavigatorMovePreviousItem,
            this.bindingNavigatorSeparator,
            this.bindingNavigatorPositionItem,
            this.bindingNavigatorCountItem,
            this.bindingNavigatorSeparator1,
            this.bindingNavigatorMoveNextItem,
            this.bindingNavigatorMoveLastItem,
            this.bindingNavigatorSeparator2,
            this.bindingNavigatorAddNewItem,
            this.bindingNavigatorDeleteItem,
            this.patientsBindingNavigatorSaveItem});
            this.patientsBindingNavigator.Location = new System.Drawing.Point(0, 0);
            this.patientsBindingNavigator.MoveFirstItem = this.bindingNavigatorMoveFirstItem;
            this.patientsBindingNavigator.MoveLastItem = this.bindingNavigatorMoveLastItem;
            this.patientsBindingNavigator.MoveNextItem = this.bindingNavigatorMoveNextItem;
            this.patientsBindingNavigator.MovePreviousItem = this.bindingNavigatorMovePreviousItem;
            this.patientsBindingNavigator.Name = "patientsBindingNavigator";
            this.patientsBindingNavigator.PositionItem = this.bindingNavigatorPositionItem;
            this.patientsBindingNavigator.Size = new System.Drawing.Size(1084, 27);
            this.patientsBindingNavigator.TabIndex = 0;
            this.patientsBindingNavigator.Text = "bindingNavigator1";
            // 
            // bindingNavigatorAddNewItem
            // 
            this.bindingNavigatorAddNewItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorAddNewItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorAddNewItem.Image")));
            this.bindingNavigatorAddNewItem.Name = "bindingNavigatorAddNewItem";
            this.bindingNavigatorAddNewItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorAddNewItem.Size = new System.Drawing.Size(29, 24);
            this.bindingNavigatorAddNewItem.Text = "Add new";
            // 
            // bindingNavigatorCountItem
            // 
            this.bindingNavigatorCountItem.Name = "bindingNavigatorCountItem";
            this.bindingNavigatorCountItem.Size = new System.Drawing.Size(45, 24);
            this.bindingNavigatorCountItem.Text = "of {0}";
            this.bindingNavigatorCountItem.ToolTipText = "Total number of items";
            // 
            // bindingNavigatorDeleteItem
            // 
            this.bindingNavigatorDeleteItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorDeleteItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorDeleteItem.Image")));
            this.bindingNavigatorDeleteItem.Name = "bindingNavigatorDeleteItem";
            this.bindingNavigatorDeleteItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorDeleteItem.Size = new System.Drawing.Size(29, 24);
            this.bindingNavigatorDeleteItem.Text = "Delete";
            // 
            // bindingNavigatorMoveFirstItem
            // 
            this.bindingNavigatorMoveFirstItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveFirstItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveFirstItem.Image")));
            this.bindingNavigatorMoveFirstItem.Name = "bindingNavigatorMoveFirstItem";
            this.bindingNavigatorMoveFirstItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveFirstItem.Size = new System.Drawing.Size(29, 24);
            this.bindingNavigatorMoveFirstItem.Text = "Move first";
            // 
            // bindingNavigatorMovePreviousItem
            // 
            this.bindingNavigatorMovePreviousItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMovePreviousItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMovePreviousItem.Image")));
            this.bindingNavigatorMovePreviousItem.Name = "bindingNavigatorMovePreviousItem";
            this.bindingNavigatorMovePreviousItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMovePreviousItem.Size = new System.Drawing.Size(29, 24);
            this.bindingNavigatorMovePreviousItem.Text = "Move previous";
            // 
            // bindingNavigatorSeparator
            // 
            this.bindingNavigatorSeparator.Name = "bindingNavigatorSeparator";
            this.bindingNavigatorSeparator.Size = new System.Drawing.Size(6, 27);
            // 
            // bindingNavigatorPositionItem
            // 
            this.bindingNavigatorPositionItem.AccessibleName = "Position";
            this.bindingNavigatorPositionItem.AutoSize = false;
            this.bindingNavigatorPositionItem.Font = new System.Drawing.Font("Segoe UI", 9F);
            this.bindingNavigatorPositionItem.Name = "bindingNavigatorPositionItem";
            this.bindingNavigatorPositionItem.Size = new System.Drawing.Size(50, 27);
            this.bindingNavigatorPositionItem.Text = "0";
            this.bindingNavigatorPositionItem.ToolTipText = "Current position";
            // 
            // bindingNavigatorSeparator1
            // 
            this.bindingNavigatorSeparator1.Name = "bindingNavigatorSeparator1";
            this.bindingNavigatorSeparator1.Size = new System.Drawing.Size(6, 27);
            // 
            // bindingNavigatorMoveNextItem
            // 
            this.bindingNavigatorMoveNextItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveNextItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveNextItem.Image")));
            this.bindingNavigatorMoveNextItem.Name = "bindingNavigatorMoveNextItem";
            this.bindingNavigatorMoveNextItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveNextItem.Size = new System.Drawing.Size(29, 24);
            this.bindingNavigatorMoveNextItem.Text = "Move next";
            // 
            // bindingNavigatorMoveLastItem
            // 
            this.bindingNavigatorMoveLastItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.bindingNavigatorMoveLastItem.Image = ((System.Drawing.Image)(resources.GetObject("bindingNavigatorMoveLastItem.Image")));
            this.bindingNavigatorMoveLastItem.Name = "bindingNavigatorMoveLastItem";
            this.bindingNavigatorMoveLastItem.RightToLeftAutoMirrorImage = true;
            this.bindingNavigatorMoveLastItem.Size = new System.Drawing.Size(29, 24);
            this.bindingNavigatorMoveLastItem.Text = "Move last";
            // 
            // bindingNavigatorSeparator2
            // 
            this.bindingNavigatorSeparator2.Name = "bindingNavigatorSeparator2";
            this.bindingNavigatorSeparator2.Size = new System.Drawing.Size(6, 27);
            // 
            // patientsBindingNavigatorSaveItem
            // 
            this.patientsBindingNavigatorSaveItem.DisplayStyle = System.Windows.Forms.ToolStripItemDisplayStyle.Image;
            this.patientsBindingNavigatorSaveItem.Image = ((System.Drawing.Image)(resources.GetObject("patientsBindingNavigatorSaveItem.Image")));
            this.patientsBindingNavigatorSaveItem.Name = "patientsBindingNavigatorSaveItem";
            this.patientsBindingNavigatorSaveItem.Size = new System.Drawing.Size(29, 24);
            this.patientsBindingNavigatorSaveItem.Text = "Save Data";
            this.patientsBindingNavigatorSaveItem.Click += new System.EventHandler(this.patientsBindingNavigatorSaveItem_Click);
            // 
            // patientsDataGridView
            // 
            this.patientsDataGridView.AutoGenerateColumns = false;
            this.patientsDataGridView.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.patientsDataGridView.Columns.AddRange(new System.Windows.Forms.DataGridViewColumn[] {
            this.dataGridViewTextBoxColumn1,
            this.dataGridViewTextBoxColumn2,
            this.dataGridViewTextBoxColumn3,
            this.dataGridViewTextBoxColumn4,
            this.dataGridViewTextBoxColumn5,
            this.dataGridViewTextBoxColumn6});
            this.patientsDataGridView.DataSource = this.patientsBindingSource;
            this.patientsDataGridView.Location = new System.Drawing.Point(0, 43);
            this.patientsDataGridView.Name = "patientsDataGridView";
            this.patientsDataGridView.RowHeadersWidth = 51;
            this.patientsDataGridView.RowTemplate.Height = 24;
            this.patientsDataGridView.Size = new System.Drawing.Size(1016, 220);
            this.patientsDataGridView.TabIndex = 1;
            // 
            // closeButton
            // 
            this.closeButton.Location = new System.Drawing.Point(27, 269);
            this.closeButton.Name = "closeButton";
            this.closeButton.Size = new System.Drawing.Size(109, 49);
            this.closeButton.TabIndex = 2;
            this.closeButton.Text = "Close";
            this.closeButton.UseVisualStyleBackColor = true;
            this.closeButton.Click += new System.EventHandler(this.closeButton_Click);
            // 
            // showAllButton
            // 
            this.showAllButton.Location = new System.Drawing.Point(27, 329);
            this.showAllButton.Name = "showAllButton";
            this.showAllButton.Size = new System.Drawing.Size(109, 47);
            this.showAllButton.TabIndex = 3;
            this.showAllButton.Text = "Show All";
            this.showAllButton.UseVisualStyleBackColor = true;
            this.showAllButton.Click += new System.EventHandler(this.showAllButton_Click);
            // 
            // nameGroupBox
            // 
            this.nameGroupBox.Controls.Add(this.nameSearchInput);
            this.nameGroupBox.Controls.Add(this.nameSearchButton);
            this.nameGroupBox.Location = new System.Drawing.Point(158, 269);
            this.nameGroupBox.Name = "nameGroupBox";
            this.nameGroupBox.Size = new System.Drawing.Size(163, 156);
            this.nameGroupBox.TabIndex = 4;
            this.nameGroupBox.TabStop = false;
            this.nameGroupBox.Text = "Search Name";
            // 
            // nameSearchInput
            // 
            this.nameSearchInput.Location = new System.Drawing.Point(20, 53);
            this.nameSearchInput.Name = "nameSearchInput";
            this.nameSearchInput.Size = new System.Drawing.Size(137, 22);
            this.nameSearchInput.TabIndex = 5;
            // 
            // nameSearchButton
            // 
            this.nameSearchButton.Location = new System.Drawing.Point(44, 98);
            this.nameSearchButton.Name = "nameSearchButton";
            this.nameSearchButton.Size = new System.Drawing.Size(92, 26);
            this.nameSearchButton.TabIndex = 5;
            this.nameSearchButton.Text = "Search";
            this.nameSearchButton.UseVisualStyleBackColor = true;
            this.nameSearchButton.Click += new System.EventHandler(this.nameSearchButton_Click);
            // 
            // addressGroupBox
            // 
            this.addressGroupBox.Controls.Add(this.addressSearchInput);
            this.addressGroupBox.Controls.Add(this.addressSearchButton);
            this.addressGroupBox.Location = new System.Drawing.Point(346, 269);
            this.addressGroupBox.Name = "addressGroupBox";
            this.addressGroupBox.Size = new System.Drawing.Size(148, 156);
            this.addressGroupBox.TabIndex = 6;
            this.addressGroupBox.TabStop = false;
            this.addressGroupBox.Text = "Search Address";
            // 
            // addressSearchInput
            // 
            this.addressSearchInput.Location = new System.Drawing.Point(15, 53);
            this.addressSearchInput.Name = "addressSearchInput";
            this.addressSearchInput.Size = new System.Drawing.Size(127, 22);
            this.addressSearchInput.TabIndex = 5;
            // 
            // addressSearchButton
            // 
            this.addressSearchButton.Location = new System.Drawing.Point(41, 98);
            this.addressSearchButton.Name = "addressSearchButton";
            this.addressSearchButton.Size = new System.Drawing.Size(92, 26);
            this.addressSearchButton.TabIndex = 5;
            this.addressSearchButton.Text = "Search";
            this.addressSearchButton.UseVisualStyleBackColor = true;
            this.addressSearchButton.Click += new System.EventHandler(this.addressSearchButton_Click);
            // 
            // phoneGroupBox
            // 
            this.phoneGroupBox.Controls.Add(this.phoneSearchInput);
            this.phoneGroupBox.Controls.Add(this.phoneSearchButton);
            this.phoneGroupBox.Location = new System.Drawing.Point(500, 269);
            this.phoneGroupBox.Name = "phoneGroupBox";
            this.phoneGroupBox.Size = new System.Drawing.Size(167, 156);
            this.phoneGroupBox.TabIndex = 7;
            this.phoneGroupBox.TabStop = false;
            this.phoneGroupBox.Text = "Search Phone";
            // 
            // phoneSearchInput
            // 
            this.phoneSearchInput.Location = new System.Drawing.Point(25, 53);
            this.phoneSearchInput.Name = "phoneSearchInput";
            this.phoneSearchInput.Size = new System.Drawing.Size(126, 22);
            this.phoneSearchInput.TabIndex = 5;
            // 
            // phoneSearchButton
            // 
            this.phoneSearchButton.Location = new System.Drawing.Point(39, 98);
            this.phoneSearchButton.Name = "phoneSearchButton";
            this.phoneSearchButton.Size = new System.Drawing.Size(92, 26);
            this.phoneSearchButton.TabIndex = 5;
            this.phoneSearchButton.Text = "Search";
            this.phoneSearchButton.UseVisualStyleBackColor = true;
            this.phoneSearchButton.Click += new System.EventHandler(this.phoneSearchButton_Click);
            // 
            // emailGroupBox
            // 
            this.emailGroupBox.Controls.Add(this.emailSearchInput);
            this.emailGroupBox.Controls.Add(this.emailSearchButton);
            this.emailGroupBox.Location = new System.Drawing.Point(673, 269);
            this.emailGroupBox.Name = "emailGroupBox";
            this.emailGroupBox.Size = new System.Drawing.Size(165, 156);
            this.emailGroupBox.TabIndex = 8;
            this.emailGroupBox.TabStop = false;
            this.emailGroupBox.Text = "Search Email";
            // 
            // emailSearchInput
            // 
            this.emailSearchInput.Location = new System.Drawing.Point(23, 53);
            this.emailSearchInput.Name = "emailSearchInput";
            this.emailSearchInput.Size = new System.Drawing.Size(126, 22);
            this.emailSearchInput.TabIndex = 5;
            // 
            // emailSearchButton
            // 
            this.emailSearchButton.Location = new System.Drawing.Point(41, 98);
            this.emailSearchButton.Name = "emailSearchButton";
            this.emailSearchButton.Size = new System.Drawing.Size(92, 26);
            this.emailSearchButton.TabIndex = 5;
            this.emailSearchButton.Text = "Search";
            this.emailSearchButton.UseVisualStyleBackColor = true;
            this.emailSearchButton.Click += new System.EventHandler(this.emailSearchButton_Click);
            // 
            // groupBox4
            // 
            this.groupBox4.Controls.Add(this.deductibleLimitSearchInput);
            this.groupBox4.Controls.Add(this.deductibleLimitSearchButton);
            this.groupBox4.Location = new System.Drawing.Point(844, 269);
            this.groupBox4.Name = "groupBox4";
            this.groupBox4.Size = new System.Drawing.Size(190, 156);
            this.groupBox4.TabIndex = 7;
            this.groupBox4.TabStop = false;
            this.groupBox4.Text = "Search Deductible Limit";
            // 
            // deductibleLimitSearchInput
            // 
            this.deductibleLimitSearchInput.Location = new System.Drawing.Point(30, 53);
            this.deductibleLimitSearchInput.Name = "deductibleLimitSearchInput";
            this.deductibleLimitSearchInput.Size = new System.Drawing.Size(142, 22);
            this.deductibleLimitSearchInput.TabIndex = 5;
            // 
            // deductibleLimitSearchButton
            // 
            this.deductibleLimitSearchButton.Location = new System.Drawing.Point(61, 98);
            this.deductibleLimitSearchButton.Name = "deductibleLimitSearchButton";
            this.deductibleLimitSearchButton.Size = new System.Drawing.Size(92, 26);
            this.deductibleLimitSearchButton.TabIndex = 5;
            this.deductibleLimitSearchButton.Text = "Search";
            this.deductibleLimitSearchButton.UseVisualStyleBackColor = true;
            this.deductibleLimitSearchButton.Click += new System.EventHandler(this.deductibleLimitSearchButton_Click);
            // 
            // dataGridViewTextBoxColumn1
            // 
            this.dataGridViewTextBoxColumn1.DataPropertyName = "patientID";
            this.dataGridViewTextBoxColumn1.HeaderText = "patientID";
            this.dataGridViewTextBoxColumn1.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn1.Name = "dataGridViewTextBoxColumn1";
            this.dataGridViewTextBoxColumn1.ReadOnly = true;
            this.dataGridViewTextBoxColumn1.Width = 125;
            // 
            // dataGridViewTextBoxColumn2
            // 
            this.dataGridViewTextBoxColumn2.DataPropertyName = "patientName";
            this.dataGridViewTextBoxColumn2.HeaderText = "patientName";
            this.dataGridViewTextBoxColumn2.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn2.Name = "dataGridViewTextBoxColumn2";
            this.dataGridViewTextBoxColumn2.Width = 125;
            // 
            // dataGridViewTextBoxColumn3
            // 
            this.dataGridViewTextBoxColumn3.DataPropertyName = "patientAddress";
            this.dataGridViewTextBoxColumn3.HeaderText = "patientAddress";
            this.dataGridViewTextBoxColumn3.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn3.Name = "dataGridViewTextBoxColumn3";
            this.dataGridViewTextBoxColumn3.Width = 125;
            // 
            // dataGridViewTextBoxColumn4
            // 
            this.dataGridViewTextBoxColumn4.DataPropertyName = "patientPhone";
            this.dataGridViewTextBoxColumn4.HeaderText = "patientPhone";
            this.dataGridViewTextBoxColumn4.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn4.Name = "dataGridViewTextBoxColumn4";
            this.dataGridViewTextBoxColumn4.Width = 125;
            // 
            // dataGridViewTextBoxColumn5
            // 
            this.dataGridViewTextBoxColumn5.DataPropertyName = "patientEmail";
            this.dataGridViewTextBoxColumn5.HeaderText = "patientEmail";
            this.dataGridViewTextBoxColumn5.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn5.Name = "dataGridViewTextBoxColumn5";
            this.dataGridViewTextBoxColumn5.Width = 125;
            // 
            // dataGridViewTextBoxColumn6
            // 
            this.dataGridViewTextBoxColumn6.DataPropertyName = "patientDeductibleLimit";
            this.dataGridViewTextBoxColumn6.HeaderText = "patientDeductibleLimit";
            this.dataGridViewTextBoxColumn6.MinimumWidth = 6;
            this.dataGridViewTextBoxColumn6.Name = "dataGridViewTextBoxColumn6";
            this.dataGridViewTextBoxColumn6.Width = 125;
            // 
            // patientsBindingSource
            // 
            this.patientsBindingSource.DataMember = "patients";
            this.patientsBindingSource.DataSource = this.jonesMedicalDataSet;
            // 
            // jonesMedicalDataSet
            // 
            this.jonesMedicalDataSet.DataSetName = "JonesMedicalDataSet";
            this.jonesMedicalDataSet.SchemaSerializationMode = System.Data.SchemaSerializationMode.IncludeSchema;
            // 
            // patientsTableAdapter
            // 
            this.patientsTableAdapter.ClearBeforeFill = true;
            // 
            // tableAdapterManager
            // 
            this.tableAdapterManager.BackupDataSetBeforeUpdate = false;
            this.tableAdapterManager.patientsTableAdapter = this.patientsTableAdapter;
            this.tableAdapterManager.UpdateOrder = Jones_cc6.JonesMedicalDataSetTableAdapters.TableAdapterManager.UpdateOrderOption.InsertUpdateDelete;
            // 
            // clearButton
            // 
            this.clearButton.Location = new System.Drawing.Point(27, 395);
            this.clearButton.Name = "clearButton";
            this.clearButton.Size = new System.Drawing.Size(109, 43);
            this.clearButton.TabIndex = 9;
            this.clearButton.Text = "Clear";
            this.clearButton.UseVisualStyleBackColor = true;
            this.clearButton.Click += new System.EventHandler(this.clearButton_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1084, 450);
            this.Controls.Add(this.clearButton);
            this.Controls.Add(this.groupBox4);
            this.Controls.Add(this.emailGroupBox);
            this.Controls.Add(this.phoneGroupBox);
            this.Controls.Add(this.addressGroupBox);
            this.Controls.Add(this.nameGroupBox);
            this.Controls.Add(this.showAllButton);
            this.Controls.Add(this.closeButton);
            this.Controls.Add(this.patientsDataGridView);
            this.Controls.Add(this.patientsBindingNavigator);
            this.Name = "Form1";
            this.Text = "Form1";
            this.Load += new System.EventHandler(this.Form1_Load);
            ((System.ComponentModel.ISupportInitialize)(this.patientsBindingNavigator)).EndInit();
            this.patientsBindingNavigator.ResumeLayout(false);
            this.patientsBindingNavigator.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.patientsDataGridView)).EndInit();
            this.nameGroupBox.ResumeLayout(false);
            this.nameGroupBox.PerformLayout();
            this.addressGroupBox.ResumeLayout(false);
            this.addressGroupBox.PerformLayout();
            this.phoneGroupBox.ResumeLayout(false);
            this.phoneGroupBox.PerformLayout();
            this.emailGroupBox.ResumeLayout(false);
            this.emailGroupBox.PerformLayout();
            this.groupBox4.ResumeLayout(false);
            this.groupBox4.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.patientsBindingSource)).EndInit();
            ((System.ComponentModel.ISupportInitialize)(this.jonesMedicalDataSet)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private JonesMedicalDataSet jonesMedicalDataSet;
        private System.Windows.Forms.BindingSource patientsBindingSource;
        private JonesMedicalDataSetTableAdapters.patientsTableAdapter patientsTableAdapter;
        private JonesMedicalDataSetTableAdapters.TableAdapterManager tableAdapterManager;
        private System.Windows.Forms.BindingNavigator patientsBindingNavigator;
        private System.Windows.Forms.ToolStripButton bindingNavigatorAddNewItem;
        private System.Windows.Forms.ToolStripLabel bindingNavigatorCountItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorDeleteItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveFirstItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMovePreviousItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator;
        private System.Windows.Forms.ToolStripTextBox bindingNavigatorPositionItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator1;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveNextItem;
        private System.Windows.Forms.ToolStripButton bindingNavigatorMoveLastItem;
        private System.Windows.Forms.ToolStripSeparator bindingNavigatorSeparator2;
        private System.Windows.Forms.ToolStripButton patientsBindingNavigatorSaveItem;
        private System.Windows.Forms.DataGridView patientsDataGridView;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn1;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn2;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn3;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn4;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn5;
        private System.Windows.Forms.DataGridViewTextBoxColumn dataGridViewTextBoxColumn6;
        private System.Windows.Forms.Button closeButton;
        private System.Windows.Forms.Button showAllButton;
        private System.Windows.Forms.GroupBox nameGroupBox;
        private System.Windows.Forms.Button nameSearchButton;
        private System.Windows.Forms.TextBox nameSearchInput;
        private System.Windows.Forms.GroupBox addressGroupBox;
        private System.Windows.Forms.TextBox addressSearchInput;
        private System.Windows.Forms.Button addressSearchButton;
        private System.Windows.Forms.GroupBox phoneGroupBox;
        private System.Windows.Forms.TextBox phoneSearchInput;
        private System.Windows.Forms.Button phoneSearchButton;
        private System.Windows.Forms.GroupBox emailGroupBox;
        private System.Windows.Forms.TextBox emailSearchInput;
        private System.Windows.Forms.Button emailSearchButton;
        private System.Windows.Forms.GroupBox groupBox4;
        private System.Windows.Forms.TextBox deductibleLimitSearchInput;
        private System.Windows.Forms.Button deductibleLimitSearchButton;
        private System.Windows.Forms.Button clearButton;
    }
}

