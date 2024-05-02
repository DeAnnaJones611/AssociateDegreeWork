namespace Jones_Challenge_9._2
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
            colaOption = new GroupBox();
            colaInforamtion = new Label();
            colaAmountLabel = new Label();
            colaPicture = new PictureBox();
            grapeSodaOption = new GroupBox();
            grapeSodaInfromation = new Label();
            grapeSodaAmountLabel = new Label();
            grapePicture = new PictureBox();
            lemonLimeOption = new GroupBox();
            lemonLimeInformation = new Label();
            lemonLimeAmountLabel = new Label();
            lemonLimePicture = new PictureBox();
            rootBeerOption = new GroupBox();
            rootBeerInformation = new Label();
            rootBeerAmountLabel = new Label();
            rootBeerPicture = new PictureBox();
            totalSalesBox = new GroupBox();
            totalSalesLabel = new Label();
            totalSalesOutput = new Label();
            creamSodaOption = new GroupBox();
            creamSodaInfomation = new Label();
            creamSodaAmountLabel = new Label();
            creamPicture = new PictureBox();
            exitButton = new Button();
            colaOption.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)colaPicture).BeginInit();
            grapeSodaOption.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)grapePicture).BeginInit();
            lemonLimeOption.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)lemonLimePicture).BeginInit();
            rootBeerOption.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)rootBeerPicture).BeginInit();
            totalSalesBox.SuspendLayout();
            creamSodaOption.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)creamPicture).BeginInit();
            SuspendLayout();
            // 
            // colaOption
            // 
            colaOption.Controls.Add(colaInforamtion);
            colaOption.Controls.Add(colaAmountLabel);
            colaOption.Controls.Add(colaPicture);
            colaOption.ForeColor = SystemColors.ActiveCaptionText;
            colaOption.Location = new Point(68, 12);
            colaOption.Name = "colaOption";
            colaOption.Size = new Size(261, 167);
            colaOption.TabIndex = 0;
            colaOption.TabStop = false;
            colaOption.Enter += groupBox1_Enter;
            // 
            // colaInforamtion
            // 
            colaInforamtion.AutoSize = true;
            colaInforamtion.Location = new Point(157, 50);
            colaInforamtion.Name = "colaInforamtion";
            colaInforamtion.Size = new Size(82, 40);
            colaInforamtion.TabIndex = 2;
            colaInforamtion.Text = "   $1.00\r\nDrinks Left:";
            // 
            // colaAmountLabel
            // 
            colaAmountLabel.BorderStyle = BorderStyle.FixedSingle;
            colaAmountLabel.Location = new Point(157, 117);
            colaAmountLabel.Name = "colaAmountLabel";
            colaAmountLabel.Size = new Size(96, 32);
            colaAmountLabel.TabIndex = 1;
            // 
            // colaPicture
            // 
            colaPicture.Image = Properties.Resources.Cola;
            colaPicture.Location = new Point(6, 26);
            colaPicture.Name = "colaPicture";
            colaPicture.Size = new Size(135, 135);
            colaPicture.SizeMode = PictureBoxSizeMode.StretchImage;
            colaPicture.TabIndex = 0;
            colaPicture.TabStop = false;
            colaPicture.Click += colaPicture_Click;
            // 
            // grapeSodaOption
            // 
            grapeSodaOption.Controls.Add(grapeSodaInfromation);
            grapeSodaOption.Controls.Add(grapeSodaAmountLabel);
            grapeSodaOption.Controls.Add(grapePicture);
            grapeSodaOption.Location = new Point(348, 185);
            grapeSodaOption.Name = "grapeSodaOption";
            grapeSodaOption.Size = new Size(261, 167);
            grapeSodaOption.TabIndex = 1;
            grapeSodaOption.TabStop = false;
            // 
            // grapeSodaInfromation
            // 
            grapeSodaInfromation.AutoSize = true;
            grapeSodaInfromation.Location = new Point(151, 54);
            grapeSodaInfromation.Name = "grapeSodaInfromation";
            grapeSodaInfromation.Size = new Size(82, 40);
            grapeSodaInfromation.TabIndex = 4;
            grapeSodaInfromation.Text = "   $1.50\r\nDrinks Left:";
            // 
            // grapeSodaAmountLabel
            // 
            grapeSodaAmountLabel.BorderStyle = BorderStyle.FixedSingle;
            grapeSodaAmountLabel.Location = new Point(151, 118);
            grapeSodaAmountLabel.Name = "grapeSodaAmountLabel";
            grapeSodaAmountLabel.Size = new Size(96, 32);
            grapeSodaAmountLabel.TabIndex = 3;
            // 
            // grapePicture
            // 
            grapePicture.Image = Properties.Resources.GrapeSoda;
            grapePicture.Location = new Point(6, 26);
            grapePicture.Name = "grapePicture";
            grapePicture.Size = new Size(135, 135);
            grapePicture.SizeMode = PictureBoxSizeMode.StretchImage;
            grapePicture.TabIndex = 2;
            grapePicture.TabStop = false;
            grapePicture.Click += grapePicture_Click;
            // 
            // lemonLimeOption
            // 
            lemonLimeOption.Controls.Add(lemonLimeInformation);
            lemonLimeOption.Controls.Add(lemonLimeAmountLabel);
            lemonLimeOption.Controls.Add(lemonLimePicture);
            lemonLimeOption.Location = new Point(68, 185);
            lemonLimeOption.Name = "lemonLimeOption";
            lemonLimeOption.Size = new Size(261, 167);
            lemonLimeOption.TabIndex = 2;
            lemonLimeOption.TabStop = false;
            // 
            // lemonLimeInformation
            // 
            lemonLimeInformation.AutoSize = true;
            lemonLimeInformation.Location = new Point(157, 55);
            lemonLimeInformation.Name = "lemonLimeInformation";
            lemonLimeInformation.Size = new Size(82, 40);
            lemonLimeInformation.TabIndex = 5;
            lemonLimeInformation.Text = "   $1.00\r\nDrinks Left:";
            // 
            // lemonLimeAmountLabel
            // 
            lemonLimeAmountLabel.BorderStyle = BorderStyle.FixedSingle;
            lemonLimeAmountLabel.Location = new Point(157, 118);
            lemonLimeAmountLabel.Name = "lemonLimeAmountLabel";
            lemonLimeAmountLabel.Size = new Size(96, 32);
            lemonLimeAmountLabel.TabIndex = 4;
            // 
            // lemonLimePicture
            // 
            lemonLimePicture.Image = Properties.Resources.LemonLime;
            lemonLimePicture.Location = new Point(6, 26);
            lemonLimePicture.Name = "lemonLimePicture";
            lemonLimePicture.Size = new Size(135, 135);
            lemonLimePicture.SizeMode = PictureBoxSizeMode.StretchImage;
            lemonLimePicture.TabIndex = 6;
            lemonLimePicture.TabStop = false;
            lemonLimePicture.Click += lemonLimePicture_Click;
            // 
            // rootBeerOption
            // 
            rootBeerOption.Controls.Add(rootBeerInformation);
            rootBeerOption.Controls.Add(rootBeerAmountLabel);
            rootBeerOption.Controls.Add(rootBeerPicture);
            rootBeerOption.Location = new Point(348, 12);
            rootBeerOption.Name = "rootBeerOption";
            rootBeerOption.Size = new Size(261, 167);
            rootBeerOption.TabIndex = 3;
            rootBeerOption.TabStop = false;
            // 
            // rootBeerInformation
            // 
            rootBeerInformation.AutoSize = true;
            rootBeerInformation.Location = new Point(151, 50);
            rootBeerInformation.Name = "rootBeerInformation";
            rootBeerInformation.Size = new Size(82, 40);
            rootBeerInformation.TabIndex = 3;
            rootBeerInformation.Text = "   $1.00\r\nDrinks Left:";
            // 
            // rootBeerAmountLabel
            // 
            rootBeerAmountLabel.BorderStyle = BorderStyle.FixedSingle;
            rootBeerAmountLabel.Location = new Point(151, 117);
            rootBeerAmountLabel.Name = "rootBeerAmountLabel";
            rootBeerAmountLabel.Size = new Size(96, 32);
            rootBeerAmountLabel.TabIndex = 2;
            // 
            // rootBeerPicture
            // 
            rootBeerPicture.Image = Properties.Resources.RootBeer;
            rootBeerPicture.Location = new Point(0, 26);
            rootBeerPicture.Name = "rootBeerPicture";
            rootBeerPicture.Size = new Size(135, 135);
            rootBeerPicture.SizeMode = PictureBoxSizeMode.StretchImage;
            rootBeerPicture.TabIndex = 1;
            rootBeerPicture.TabStop = false;
            rootBeerPicture.Click += rootBeerPicture_Click;
            // 
            // totalSalesBox
            // 
            totalSalesBox.Controls.Add(totalSalesLabel);
            totalSalesBox.Controls.Add(totalSalesOutput);
            totalSalesBox.Location = new Point(348, 354);
            totalSalesBox.Name = "totalSalesBox";
            totalSalesBox.Size = new Size(261, 167);
            totalSalesBox.TabIndex = 5;
            totalSalesBox.TabStop = false;
            // 
            // totalSalesLabel
            // 
            totalSalesLabel.AutoSize = true;
            totalSalesLabel.Font = new Font("Segoe UI", 9F, FontStyle.Bold, GraphicsUnit.Point);
            totalSalesLabel.Location = new Point(78, 59);
            totalSalesLabel.Name = "totalSalesLabel";
            totalSalesLabel.Size = new Size(83, 20);
            totalSalesLabel.TabIndex = 8;
            totalSalesLabel.Text = "Total Sales\r\n";
            // 
            // totalSalesOutput
            // 
            totalSalesOutput.BorderStyle = BorderStyle.FixedSingle;
            totalSalesOutput.Location = new Point(73, 96);
            totalSalesOutput.Name = "totalSalesOutput";
            totalSalesOutput.Size = new Size(96, 32);
            totalSalesOutput.TabIndex = 8;
            // 
            // creamSodaOption
            // 
            creamSodaOption.Controls.Add(creamSodaInfomation);
            creamSodaOption.Controls.Add(creamSodaAmountLabel);
            creamSodaOption.Controls.Add(creamPicture);
            creamSodaOption.Location = new Point(68, 354);
            creamSodaOption.Name = "creamSodaOption";
            creamSodaOption.Size = new Size(261, 167);
            creamSodaOption.TabIndex = 4;
            creamSodaOption.TabStop = false;
            // 
            // creamSodaInfomation
            // 
            creamSodaInfomation.AutoSize = true;
            creamSodaInfomation.Location = new Point(157, 45);
            creamSodaInfomation.Name = "creamSodaInfomation";
            creamSodaInfomation.Size = new Size(82, 40);
            creamSodaInfomation.TabIndex = 7;
            creamSodaInfomation.Text = "   $1.50\r\nDrinks Left:";
            // 
            // creamSodaAmountLabel
            // 
            creamSodaAmountLabel.BorderStyle = BorderStyle.FixedSingle;
            creamSodaAmountLabel.Location = new Point(157, 107);
            creamSodaAmountLabel.Name = "creamSodaAmountLabel";
            creamSodaAmountLabel.Size = new Size(96, 32);
            creamSodaAmountLabel.TabIndex = 7;
            // 
            // creamPicture
            // 
            creamPicture.Image = Properties.Resources.CreamSoda;
            creamPicture.Location = new Point(6, 26);
            creamPicture.Name = "creamPicture";
            creamPicture.Size = new Size(135, 135);
            creamPicture.SizeMode = PictureBoxSizeMode.StretchImage;
            creamPicture.TabIndex = 6;
            creamPicture.TabStop = false;
            creamPicture.Click += creamPicture_Click;
            // 
            // exitButton
            // 
            exitButton.Location = new Point(298, 530);
            exitButton.Name = "exitButton";
            exitButton.Size = new Size(103, 33);
            exitButton.TabIndex = 6;
            exitButton.Text = "Exit";
            exitButton.UseVisualStyleBackColor = true;
            exitButton.Click += exitButton_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(800, 582);
            Controls.Add(exitButton);
            Controls.Add(totalSalesBox);
            Controls.Add(creamSodaOption);
            Controls.Add(rootBeerOption);
            Controls.Add(lemonLimeOption);
            Controls.Add(grapeSodaOption);
            Controls.Add(colaOption);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            colaOption.ResumeLayout(false);
            colaOption.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)colaPicture).EndInit();
            grapeSodaOption.ResumeLayout(false);
            grapeSodaOption.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)grapePicture).EndInit();
            lemonLimeOption.ResumeLayout(false);
            lemonLimeOption.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)lemonLimePicture).EndInit();
            rootBeerOption.ResumeLayout(false);
            rootBeerOption.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)rootBeerPicture).EndInit();
            totalSalesBox.ResumeLayout(false);
            totalSalesBox.PerformLayout();
            creamSodaOption.ResumeLayout(false);
            creamSodaOption.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)creamPicture).EndInit();
            ResumeLayout(false);
        }

        #endregion

        private GroupBox colaOption;
        private GroupBox grapeSodaOption;
        private GroupBox lemonLimeOption;
        private GroupBox rootBeerOption;
        private GroupBox totalSalesBox;
        private GroupBox creamSodaOption;
        private Label colaAmountLabel;
        private PictureBox colaPicture;
        private PictureBox grapePicture;
        private PictureBox lemonLimePicture;
        private PictureBox rootBeerPicture;
        private PictureBox pictureBox6;
        private PictureBox creamPicture;
        private Label grapeSodaAmountLabel;
        private Label lemonLimeAmountLabel;
        private Label rootBeerAmountLabel;
        private Label totalSalesOutput;
        private Label creamSodaAmountLabel;
        private Label colaInforamtion;
        private Label grapeSodaInfromation;
        private Label lemonLimeInformation;
        private Label rootBeerInformation;
        private Label totalSalesLabel;
        private Label creamSodaInfomation;
        private Button exitButton;
    }
}