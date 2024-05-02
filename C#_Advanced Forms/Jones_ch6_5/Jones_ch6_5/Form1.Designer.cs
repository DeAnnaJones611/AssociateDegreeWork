namespace Jones_ch6_5
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
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
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            oilLubeGroupBox = new GroupBox();
            lubeJobCheckBox = new CheckBox();
            oilChangeCheckBox = new CheckBox();
            flushesGroupBox = new GroupBox();
            transmissionFlushCheckBox = new CheckBox();
            radiatorFlushCheckBox = new CheckBox();
            MiscGroupBox = new GroupBox();
            tireRotationCheckBox = new CheckBox();
            replaceMufflerCheckBox = new CheckBox();
            inspectionCheckBox = new CheckBox();
            partsLaborGroupBox = new GroupBox();
            laborLabel = new Label();
            partsLabel = new Label();
            laborInput = new TextBox();
            partsInput = new TextBox();
            summaryGroupBox = new GroupBox();
            totalFeesOutput = new Label();
            taxOutput = new Label();
            partOuput = new Label();
            servicesLaborOutput = new Label();
            totalFeesLabel = new Label();
            taxLabel = new Label();
            partsSummaryLabel = new Label();
            servicesLaborLabel = new Label();
            calculateButton = new Button();
            quitButton = new Button();
            clearButton = new Button();
            oilLubeGroupBox.SuspendLayout();
            flushesGroupBox.SuspendLayout();
            MiscGroupBox.SuspendLayout();
            partsLaborGroupBox.SuspendLayout();
            summaryGroupBox.SuspendLayout();
            SuspendLayout();
            // 
            // oilLubeGroupBox
            // 
            oilLubeGroupBox.Controls.Add(lubeJobCheckBox);
            oilLubeGroupBox.Controls.Add(oilChangeCheckBox);
            oilLubeGroupBox.Location = new Point(43, 28);
            oilLubeGroupBox.Name = "oilLubeGroupBox";
            oilLubeGroupBox.Size = new Size(214, 106);
            oilLubeGroupBox.TabIndex = 0;
            oilLubeGroupBox.TabStop = false;
            oilLubeGroupBox.Text = "Oil and Lube";
            oilLubeGroupBox.Enter += groupBox1_Enter;
            // 
            // lubeJobCheckBox
            // 
            lubeJobCheckBox.AutoSize = true;
            lubeJobCheckBox.Location = new Point(6, 59);
            lubeJobCheckBox.Name = "lubeJobCheckBox";
            lubeJobCheckBox.Size = new Size(147, 24);
            lubeJobCheckBox.TabIndex = 1;
            lubeJobCheckBox.Text = "Lube Job ($18.00)";
            lubeJobCheckBox.UseVisualStyleBackColor = true;
            // 
            // oilChangeCheckBox
            // 
            oilChangeCheckBox.AutoSize = true;
            oilChangeCheckBox.Location = new Point(6, 30);
            oilChangeCheckBox.Name = "oilChangeCheckBox";
            oilChangeCheckBox.Size = new Size(161, 24);
            oilChangeCheckBox.TabIndex = 0;
            oilChangeCheckBox.Text = "Oil Change ($26.00)";
            oilChangeCheckBox.UseVisualStyleBackColor = true;
            // 
            // flushesGroupBox
            // 
            flushesGroupBox.Controls.Add(transmissionFlushCheckBox);
            flushesGroupBox.Controls.Add(radiatorFlushCheckBox);
            flushesGroupBox.Location = new Point(311, 28);
            flushesGroupBox.Name = "flushesGroupBox";
            flushesGroupBox.Size = new Size(249, 106);
            flushesGroupBox.TabIndex = 1;
            flushesGroupBox.TabStop = false;
            flushesGroupBox.Text = "Flushes";
            // 
            // transmissionFlushCheckBox
            // 
            transmissionFlushCheckBox.AutoSize = true;
            transmissionFlushCheckBox.Location = new Point(6, 59);
            transmissionFlushCheckBox.Name = "transmissionFlushCheckBox";
            transmissionFlushCheckBox.Size = new Size(210, 24);
            transmissionFlushCheckBox.TabIndex = 3;
            transmissionFlushCheckBox.Text = "Transmission Fluch ($80.00)";
            transmissionFlushCheckBox.UseVisualStyleBackColor = true;
            // 
            // radiatorFlushCheckBox
            // 
            radiatorFlushCheckBox.AutoSize = true;
            radiatorFlushCheckBox.Location = new Point(6, 29);
            radiatorFlushCheckBox.Name = "radiatorFlushCheckBox";
            radiatorFlushCheckBox.Size = new Size(182, 24);
            radiatorFlushCheckBox.TabIndex = 2;
            radiatorFlushCheckBox.Text = "Radiator Flush ($30.00)";
            radiatorFlushCheckBox.UseVisualStyleBackColor = true;
            // 
            // MiscGroupBox
            // 
            MiscGroupBox.Controls.Add(tireRotationCheckBox);
            MiscGroupBox.Controls.Add(replaceMufflerCheckBox);
            MiscGroupBox.Controls.Add(inspectionCheckBox);
            MiscGroupBox.Location = new Point(43, 140);
            MiscGroupBox.Name = "MiscGroupBox";
            MiscGroupBox.Size = new Size(214, 118);
            MiscGroupBox.TabIndex = 2;
            MiscGroupBox.TabStop = false;
            MiscGroupBox.Text = "Misc";
            // 
            // tireRotationCheckBox
            // 
            tireRotationCheckBox.AutoSize = true;
            tireRotationCheckBox.Location = new Point(6, 88);
            tireRotationCheckBox.Name = "tireRotationCheckBox";
            tireRotationCheckBox.Size = new Size(174, 24);
            tireRotationCheckBox.TabIndex = 4;
            tireRotationCheckBox.Text = "Tire Rotation ($20.00)";
            tireRotationCheckBox.UseVisualStyleBackColor = true;
            // 
            // replaceMufflerCheckBox
            // 
            replaceMufflerCheckBox.AutoSize = true;
            replaceMufflerCheckBox.Location = new Point(6, 56);
            replaceMufflerCheckBox.Name = "replaceMufflerCheckBox";
            replaceMufflerCheckBox.Size = new Size(201, 24);
            replaceMufflerCheckBox.TabIndex = 3;
            replaceMufflerCheckBox.Text = "Replace Muffler ($100.00)";
            replaceMufflerCheckBox.UseVisualStyleBackColor = true;
            // 
            // inspectionCheckBox
            // 
            inspectionCheckBox.AutoSize = true;
            inspectionCheckBox.Location = new Point(6, 26);
            inspectionCheckBox.Name = "inspectionCheckBox";
            inspectionCheckBox.Size = new Size(156, 24);
            inspectionCheckBox.TabIndex = 2;
            inspectionCheckBox.Text = "Inspection ($15.00)";
            inspectionCheckBox.UseVisualStyleBackColor = true;
            // 
            // partsLaborGroupBox
            // 
            partsLaborGroupBox.Controls.Add(laborLabel);
            partsLaborGroupBox.Controls.Add(partsLabel);
            partsLaborGroupBox.Controls.Add(laborInput);
            partsLaborGroupBox.Controls.Add(partsInput);
            partsLaborGroupBox.Location = new Point(316, 140);
            partsLaborGroupBox.Name = "partsLaborGroupBox";
            partsLaborGroupBox.Size = new Size(244, 118);
            partsLaborGroupBox.TabIndex = 3;
            partsLaborGroupBox.TabStop = false;
            partsLaborGroupBox.Text = "Parts and Labor";
            // 
            // laborLabel
            // 
            laborLabel.AutoSize = true;
            laborLabel.Location = new Point(41, 85);
            laborLabel.Name = "laborLabel";
            laborLabel.Size = new Size(69, 20);
            laborLabel.TabIndex = 3;
            laborLabel.Text = "Labor ($)";
            // 
            // partsLabel
            // 
            partsLabel.AutoSize = true;
            partsLabel.Location = new Point(41, 41);
            partsLabel.Name = "partsLabel";
            partsLabel.Size = new Size(47, 20);
            partsLabel.TabIndex = 2;
            partsLabel.Text = "Parts: ";
            partsLabel.Click += label9_Click;
            // 
            // laborInput
            // 
            laborInput.Location = new Point(116, 85);
            laborInput.Name = "laborInput";
            laborInput.Size = new Size(77, 27);
            laborInput.TabIndex = 1;
            // 
            // partsInput
            // 
            partsInput.Location = new Point(116, 34);
            partsInput.Name = "partsInput";
            partsInput.Size = new Size(77, 27);
            partsInput.TabIndex = 0;
            // 
            // summaryGroupBox
            // 
            summaryGroupBox.Controls.Add(totalFeesOutput);
            summaryGroupBox.Controls.Add(taxOutput);
            summaryGroupBox.Controls.Add(partOuput);
            summaryGroupBox.Controls.Add(servicesLaborOutput);
            summaryGroupBox.Controls.Add(totalFeesLabel);
            summaryGroupBox.Controls.Add(taxLabel);
            summaryGroupBox.Controls.Add(partsSummaryLabel);
            summaryGroupBox.Controls.Add(servicesLaborLabel);
            summaryGroupBox.Location = new Point(43, 284);
            summaryGroupBox.Name = "summaryGroupBox";
            summaryGroupBox.Size = new Size(517, 216);
            summaryGroupBox.TabIndex = 4;
            summaryGroupBox.TabStop = false;
            summaryGroupBox.Text = "Summary";
            // 
            // totalFeesOutput
            // 
            totalFeesOutput.BorderStyle = BorderStyle.FixedSingle;
            totalFeesOutput.Location = new Point(190, 147);
            totalFeesOutput.Name = "totalFeesOutput";
            totalFeesOutput.Size = new Size(146, 20);
            totalFeesOutput.TabIndex = 7;
            // 
            // taxOutput
            // 
            taxOutput.BorderStyle = BorderStyle.FixedSingle;
            taxOutput.Location = new Point(190, 108);
            taxOutput.Name = "taxOutput";
            taxOutput.Size = new Size(146, 20);
            taxOutput.TabIndex = 6;
            // 
            // partOuput
            // 
            partOuput.BorderStyle = BorderStyle.FixedSingle;
            partOuput.Location = new Point(190, 72);
            partOuput.Name = "partOuput";
            partOuput.Size = new Size(146, 20);
            partOuput.TabIndex = 5;
            // 
            // servicesLaborOutput
            // 
            servicesLaborOutput.BorderStyle = BorderStyle.FixedSingle;
            servicesLaborOutput.Location = new Point(190, 40);
            servicesLaborOutput.Name = "servicesLaborOutput";
            servicesLaborOutput.Size = new Size(146, 20);
            servicesLaborOutput.TabIndex = 4;
            // 
            // totalFeesLabel
            // 
            totalFeesLabel.AutoSize = true;
            totalFeesLabel.Location = new Point(58, 147);
            totalFeesLabel.Name = "totalFeesLabel";
            totalFeesLabel.Size = new Size(82, 20);
            totalFeesLabel.TabIndex = 3;
            totalFeesLabel.Text = "Total Fees: ";
            // 
            // taxLabel
            // 
            taxLabel.AutoSize = true;
            taxLabel.Location = new Point(39, 108);
            taxLabel.Name = "taxLabel";
            taxLabel.Size = new Size(101, 20);
            taxLabel.TabIndex = 2;
            taxLabel.Text = "Tax(on parts): ";
            // 
            // partsSummaryLabel
            // 
            partsSummaryLabel.AutoSize = true;
            partsSummaryLabel.Location = new Point(93, 72);
            partsSummaryLabel.Name = "partsSummaryLabel";
            partsSummaryLabel.Size = new Size(47, 20);
            partsSummaryLabel.TabIndex = 1;
            partsSummaryLabel.Text = "Parts: ";
            // 
            // servicesLaborLabel
            // 
            servicesLaborLabel.AutoSize = true;
            servicesLaborLabel.Location = new Point(39, 40);
            servicesLaborLabel.Name = "servicesLaborLabel";
            servicesLaborLabel.Size = new Size(134, 20);
            servicesLaborLabel.TabIndex = 0;
            servicesLaborLabel.Text = "Service and Labor: ";
            // 
            // calculateButton
            // 
            calculateButton.Location = new Point(101, 520);
            calculateButton.Name = "calculateButton";
            calculateButton.Size = new Size(115, 29);
            calculateButton.TabIndex = 5;
            calculateButton.Text = "Calculate";
            calculateButton.UseVisualStyleBackColor = true;
            calculateButton.Click += calculateButton_Click;
            // 
            // quitButton
            // 
            quitButton.Location = new Point(357, 520);
            quitButton.Name = "quitButton";
            quitButton.Size = new Size(115, 29);
            quitButton.TabIndex = 6;
            quitButton.Text = "Quit";
            quitButton.UseVisualStyleBackColor = true;
            quitButton.Click += quitButton_Click;
            // 
            // clearButton
            // 
            clearButton.Location = new Point(233, 520);
            clearButton.Name = "clearButton";
            clearButton.Size = new Size(115, 29);
            clearButton.TabIndex = 7;
            clearButton.Text = "Clear";
            clearButton.UseVisualStyleBackColor = true;
            clearButton.Click += clearButton_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 595);
            Controls.Add(clearButton);
            Controls.Add(quitButton);
            Controls.Add(calculateButton);
            Controls.Add(summaryGroupBox);
            Controls.Add(partsLaborGroupBox);
            Controls.Add(MiscGroupBox);
            Controls.Add(flushesGroupBox);
            Controls.Add(oilLubeGroupBox);
            Name = "Form1";
            Text = "Form1";
            oilLubeGroupBox.ResumeLayout(false);
            oilLubeGroupBox.PerformLayout();
            flushesGroupBox.ResumeLayout(false);
            flushesGroupBox.PerformLayout();
            MiscGroupBox.ResumeLayout(false);
            MiscGroupBox.PerformLayout();
            partsLaborGroupBox.ResumeLayout(false);
            partsLaborGroupBox.PerformLayout();
            summaryGroupBox.ResumeLayout(false);
            summaryGroupBox.PerformLayout();
            ResumeLayout(false);
        }

        #endregion

        private GroupBox oilLubeGroupBox;
        private GroupBox flushesGroupBox;
        private GroupBox MiscGroupBox;
        private GroupBox partsLaborGroupBox;
        private CheckBox lubeJobCheckBox;
        private CheckBox oilChangeCheckBox;
        private CheckBox transmissionFlushCheckBox;
        private CheckBox radiatorFlushCheckBox;
        private CheckBox tireRotationCheckBox;
        private CheckBox replaceMufflerCheckBox;
        private CheckBox inspectionCheckBox;
        private Label laborLabel;
        private Label partsLabel;
        private TextBox laborInput;
        private TextBox partsInput;
        private GroupBox summaryGroupBox;
        private Label totalFeesOutput;
        private Label taxOutput;
        private Label partOuput;
        private Label servicesLaborOutput;
        private Label totalFeesLabel;
        private Label taxLabel;
        private Label partsSummaryLabel;
        private Label servicesLaborLabel;
        private Button calculateButton;
        private Button quitButton;
        private Button clearButton;
    }
}