# Hosting a React Web Application on AWS EC2

This guide walks through the steps required to host a React web application on an AWS EC2 instance. It includes setting up the instance, deploying the application, managing processes, and assigning an Elastic IP.

## Prerequisites
1. AWS account.
2. React application ready for deployment.
3. Basic knowledge of Linux commands (`ls`, `mkdir`, etc.).
4. An SSH client (e.g., terminal on macOS/Linux, PuTTY on Windows).

---

## Step 1: Launching an EC2 Instance
1. Go to the AWS Management Console.
2. Navigate to **EC2** > **Instances** > **Launch Instances**.
3. Configure your instance:
   - Select an Ubuntu AMI (Amazon Machine Image).
   - Choose a t2.micro instance (Free Tier eligible).
4. Create or select a key pair:
   - Name your key pair (e.g., `ReactKey`).
   - Download the `.pem` file and keep it secure.
5. Configure security groups:
   - Allow inbound traffic on port **3000** (for your React app).
   - Allow SSH access (port **22**).
6. Launch the instance.

---

## Step 2: Connect to Your Instance via SSH
1. Open your terminal and navigate to the directory containing the `.pem` file.
2. Connect using the following command:
   ```bash
   ssh -i "ReactKey.pem" ubuntu@<Public_IP_or_DNS>
   ```
3. Replace `<Public_IP_or_DNS>` with your instance's public IP or DNS.

---

## Step 3: Install Required Software
1. Update the package list:
   ```bash
   sudo apt update
   ```
2. Install Node.js and npm:
   ```bash
   sudo apt install nodejs npm -y
   ```
3. Verify installation:
   ```bash
   node -v
   npm -v
   ```

---

## Step 4: Clone Your React App Repository
1. Navigate to your home directory:
   ```bash
   cd ~
   ```
2. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
3. Navigate into the project folder:
   ```bash
   cd <project_directory>
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start the React development server:
   ```bash
   npm start
   ```

---

## Step 5: Assign an Elastic IP
1. Go to the AWS Management Console > **EC2** > **Elastic IPs**.
2. Allocate a new Elastic IP.
3. Associate the Elastic IP with your instance:
   - Select your instance ID.
   - Confirm the association.

Your React app should now be accessible via the Elastic IP.

---

## Step 6: Check and Manage Running Processes
1. List running processes on port 3000:
   ```bash
   sudo lsof -i :3000
   ```
2. Kill the process if needed:
   ```bash
   kill <PID>
   ```
   Replace `<PID>` with the process ID from the `lsof` output.

---

## Step 7: Enable HTTPS (Optional)
1. Install Certbot:
   ```bash
   sudo apt install certbot
   ```
2. Generate a self-signed certificate or use a custom domain with Certbot for Let's Encrypt.

---

## Additional Tips
- **Deploying a Production Build:**
  - Build your React app:
    ```bash
    npm run build
    ```
  - Serve the static files using a web server like `nginx`.

- **Saving Environment Variables:**
  - Create a `.env` file in your project directory.
  - Add environment-specific variables (e.g., API URLs, SSL cert paths).

- **Securing Your Instance:**
  - Regularly update your instance:
    ```bash
    sudo apt update && sudo apt upgrade -y
    ```
  - Close unused ports in your security group.

---

## Troubleshooting
1. **Instance Unreachable:**
   - Ensure your security group allows inbound traffic on the required ports.
2. **React App Not Running:**
   - Check for errors in your application.
   - Verify running processes using `sudo lsof -i :3000`.
3. **Elastic IP Not Accessible:**
   - Check if the instance is running.
   - Ensure the Elastic IP is associated with the instance.

---

By following this guide, you should be able to confidently host React web applications on AWS EC2 and manage them effectively.
