# Hosting a React Web Application on AWS EC2

This guide covers all necessary steps to host a React web application on AWS EC2, from creating an instance to making your application accessible via an Elastic IP.

---

## Steps to Host Your React App

### 1. Launch an EC2 Instance
1. Go to the AWS Management Console.
2. Navigate to **EC2 > Instances**.
3. Click on **Launch Instance** and configure the following:
   - **Choose an Amazon Machine Image (AMI)**: Select Ubuntu 22.04 or similar.
   - **Instance Type**: Select `t2.micro` (free tier eligible).
   - **Key Pair**: Create or select an existing key pair.
   - **Security Group**: Allow SSH (port 22).
4. Launch the instance and download the `.pem` key file.

---

### 2. Connect to Your Instance
Use SSH to connect to your instance:
```bash
ssh -i "ReactKey.pem" ubuntu@<your-ec2-public-ip>
```
Replace `<your-ec2-public-ip>` with the public IP of your instance.

---

### 3. Clone Your React App
1. Install Git:
   ```bash
   sudo apt update
   sudo apt install git -y
   ```
2. Clone your repository:
   ```bash
   git clone <your-repo-url>
   ```
3. Navigate to the project folder:
   ```bash
   cd <your-project-folder>
   ```

---

### 4. Install Dependencies
1. Install Node.js and npm:
   ```bash
   sudo apt install nodejs npm -y
   ```
2. Install project dependencies:
   ```bash
   npm install
   ```

---

### 5. Build and Serve Your React App
1. Create a production build:
   ```bash
   npm run build
   ```
2. Install the `serve` package globally:
   ```bash
   sudo npm install -g serve
   ```
3. Serve the build folder on a specific port (e.g., 8080):
   ```bash
   serve -s build -l 8080
   ```

---

### 6. Add Ports to Security Group
By default, AWS EC2 blocks traffic to most ports. To make your app accessible:

1. Go to the **AWS Management Console**.
2. Navigate to **EC2 > Security Groups**.
3. Select the Security Group attached to your EC2 instance.
4. Edit the **Inbound rules**:
   - Add a new rule:
     - **Type**: Custom TCP Rule
     - **Protocol**: TCP
     - **Port Range**: 8080 (or your chosen port)
     - **Source**: Anywhere (0.0.0.0/0) or your specific IP range
5. Save the rule.

---

### 7. Assign an Elastic IP (Optional)
1. Navigate to **EC2 > Elastic IPs**.
2. Allocate a new Elastic IP address.
3. Associate it with your instance.
4. Use the Elastic IP to access your app instead of the dynamic public IP.

---

### 8. Using Fine-Grained Personal Access Tokens
If you cannot add your GitHub account to your EC2 instance directly, use fine-grained personal access tokens:

1. Generate a fine-grained token on GitHub:
   - Go to **Settings > Developer Settings > Personal Access Tokens > Fine-Grained Tokens**.
   - Click **Generate new token** and select your repository's permissions (e.g., read and write access).
   - Copy the generated token (it will only be shown once).
2. Use the token to clone the repository:
   ```bash
   git clone https://<your-username>@github.com/<your-repo>.git
   ```
   When prompted for a password, use the token instead.

---

### 9. Access Your React App
Once your app is running and the security group is configured, open the following URL in your browser:
```
http://<elastic-ip>:8080/
```
Replace `<elastic-ip>` with your Elastic IP address.

---

### 10. Monitor and Manage Processes
1. Check running processes:
   ```bash
   ps aux | grep npm
   ```
2. Stop a process by its PID:
   ```bash
   kill -9 <pid>
   ```

---

### 11. Additional Notes
- Ensure you keep your `.pem` key secure.
- Use environment variables to manage sensitive data.
- Regularly update your instance and dependencies for security.
