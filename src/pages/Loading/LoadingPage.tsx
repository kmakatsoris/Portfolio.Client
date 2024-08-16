import React from "react";
import styles from "./LoadingPage.module.css";
import logoImg from "../../images/logo/Logo2.png";
import ShowUpWithJumpscareEfect from "../../modules/components/showupViewer/ShowUpWithJumpscareEfect";
import InfiniteRender from "../../modules/components/showupViewer/InfiniteRender";
import CodeDisplay from "../../modules/components/contentViewer/CodeDisplay";

const TIME_INTERVAL_TO_ANIMATED_SHAPES: number = 300; // 300
const TIME_INTERVAL_TO_LOGO_TXT: number = 1500;
const quotes = [
  "no matter what the weather is outside;there is always a productive path on our avenue",
  "technology isn't just my career—it's;the language i use to shape tomorrow's possibilities.",
  "turning ideas into innovation;one line of code at a time.",
  "innovation is my code.",
  "crafting code that drives change.",
  "code with a vision for the future.",
];
const codeExamples = [
  // Existing lines...
  "Fetching package metadata...",
  "Resolving dependencies...",
  'Downloading package "react"...',
  'Downloading package "react-dom"...',
  "Installing dependencies...",
  "Building project...",
  "Installation complete!",

  // Kubernetes Commands
  "$ kubectl get pods",
  "NAME                                READY   STATUS    RESTARTS   AGE",
  "myapp-deployment-5d8b8b6d7d-m5trt   1/1     Running   0          2m",
  "$ kubectl apply -f deployment.yaml",
  "deployment.apps/myapp created",

  // Docker Build and Run
  "$ docker build -t myapp .",
  "Sending build context to Docker daemon  12.8MB",
  "Step 1/5 : FROM node:14",
  " ---> a2a9d46f5d57",
  "Step 2/5 : WORKDIR /app",
  " ---> Using cache",
  " ---> 0a550a4857d5",
  "Step 3/5 : COPY . .",
  " ---> Using cache",
  " ---> 39858ed78b3c",
  "Step 4/5 : RUN npm install",
  " ---> Using cache",
  " ---> e3b0c44298f7",
  'Step 5/5 : CMD ["npm", "start"]',
  " ---> Using cache",
  " ---> d4f8b682d5cc",
  "Successfully built d4f8b682d5cc",
  "Successfully tagged myapp:latest",

  // Nginx Start/Restart
  "$ sudo systemctl start nginx",
  "$ sudo systemctl status nginx",
  "● nginx.service - A high performance web server and a reverse proxy server",
  "   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)",
  "   Active: active (running) since Sat 2024-08-10 14:32:13 UTC; 2s ago",
  "  Process: 1713 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)",
  "  Process: 1705 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)",
  " Main PID: 1722 (nginx)",
  "    Tasks: 3 (limit: 4686)",
  "   Memory: 3.2M",

  // Kubernetes Commands
  "$ kubectl get pods",
  "NAME                                READY   STATUS    RESTARTS   AGE",
  "myapp-deployment-5d8b8b6d7d-m5trt   1/1     Running   0          2m",
  "$ kubectl apply -f deployment.yaml",
  "deployment.apps/myapp created",

  // System Updates
  "$ sudo apt-get update",
  "Hit:1 http://archive.ubuntu.com/ubuntu focal InRelease",
  "Get:2 http://archive.ubuntu.com/ubuntu focal-updates InRelease [114 kB]",
  "Fetched 114 kB in 1s (114 kB/s)",
  "Reading package lists... Done",
  "$ sudo apt-get upgrade",
  "Reading package lists... Done",
  "Building dependency tree",
  "Reading state information... Done",
  "The following packages will be upgraded: ...",
  "Upgrade completed!",

  // Node Version Manager (nvm)
  "$ nvm install 16",
  "Downloading and installing node v16.19.0...",
  "Now using node v16.19.0 (npm v8.19.3)",
  "$ nvm use 16",
  "Now using node v16.19.0 (npm v8.19.3)",

  // Git Operations
  "$ git init",
  "Initialized empty Git repository in /path/to/repo/.git/",
  "$ git add .",
  "The following paths have been updated: ...",
  "$ git commit -m 'Initial commit'",
  "[master (root-commit) a1b2c3d] Initial commit",
  " 1 file changed, 1 insertion(+)",
  " create mode 100644 README.md",

  // NPM Install
  "$ npm install express",
  "npm WARN deprecated har-validator@5.1.5: this library is no longer supported",
  "added 50 packages from 40 contributors and audited 50 packages in 1.5s",
  "found 0 vulnerabilities",

  // Python Virtualenv
  "$ python -m venv myenv",
  "created virtual environment 'myenv' in ...",
  "$ source myenv/bin/activate",
  "(myenv) $ pip install django",
  "Successfully installed django-3.2.8",

  // Yarn Commands
  "$ yarn add axios",
  "yarn add v1.22.19",
  "info No lockfile found.",
  "success Saved 1 new dependency.",
  "info Done in 0.45s",

  // Server Logs
  "2024-08-10T14:32:14.123Z INFO Server started on port 3000",
  "2024-08-10T14:32:15.456Z WARN Missing configuration file: config.json",
  "2024-08-10T14:32:16.789Z Success connection to database: Connection Approved",
];

interface LoadingPageProps {
  isLoaded: React.Dispatch<React.SetStateAction<boolean>>;
  enQuotes: boolean;
  enShapes: boolean;
}

const LoadingPage = (props: LoadingPageProps) => {
  // Define module's members
  // --------------------------------------------------------------

  // Define module's rendering modules
  // --------------------------------------------------------------
  const _renderingQuote = (q: string, qStyle: string) => {
    let q_strs = q.split(";");
    return q_strs.map(
      (s: string, idx: number) =>
        s && (
          <div key={idx} className={styles[`${qStyle}-${idx}`]}>
            {s}
          </div>
        )
    );
  };

  const _renderAnimatedContent0 = () => {
    return (
      <InfiniteRender
        renderComponent={
          <ShowUpWithJumpscareEfect
            graphicPre={
              <div
                className={styles.animatedContainer0}
                style={{ backgroundColor: "rgb(255 156 119)" }}
              ></div>
            }
            graphicTrans={
              <div
                className={styles.animatedContainer0}
                style={{ backgroundColor: "antiquewhite" }}
              ></div>
            }
            graphicPost={
              <ShowUpWithJumpscareEfect
                graphicPre={
                  <div
                    className={styles.animatedContainer0}
                    style={{ backgroundColor: "#e5ffda" }}
                  ></div>
                }
                graphicTrans={
                  <div
                    className={styles.animatedContainer0}
                    style={{ backgroundColor: "#65c0e3" }}
                  ></div>
                }
                graphicPost={
                  <div
                    className={styles.animatedContainer0}
                    style={{ backgroundColor: "#dfc3f9" }}
                  ></div>
                }
                intervalTimeTransPre={TIME_INTERVAL_TO_ANIMATED_SHAPES}
                intervalTimeTransPost={TIME_INTERVAL_TO_ANIMATED_SHAPES}
                startIndication={true}
              />
            }
            intervalTimeTransPre={TIME_INTERVAL_TO_ANIMATED_SHAPES}
            intervalTimeTransPost={TIME_INTERVAL_TO_ANIMATED_SHAPES}
            startIndication={true}
          />
        }
        interval={TIME_INTERVAL_TO_ANIMATED_SHAPES * 5}
        delay={0}
      />
    );
  };

  const _renderAnimatedContent1 = () => {
    return (
      <InfiniteRender
        renderComponent={
          <ShowUpWithJumpscareEfect
            graphicPre={
              <div
                className={styles.animatedContainer1}
                style={{ backgroundColor: "rgb(255 133 130)" }}
              ></div>
            }
            graphicTrans={
              <div
                className={styles.animatedContainer1}
                style={{ backgroundColor: "#1f70ad" }}
              ></div>
            }
            graphicPost={
              <ShowUpWithJumpscareEfect
                graphicPre={
                  <div
                    className={styles.animatedContainer1}
                    style={{ backgroundColor: "#dfa3ad" }}
                  ></div>
                }
                graphicTrans={
                  <div
                    className={styles.animatedContainer1}
                    style={{ backgroundColor: "#aa73ad" }}
                  ></div>
                }
                graphicPost={
                  <div
                    className={styles.animatedContainer1}
                    style={{ backgroundColor: "#ff7daf" }}
                  ></div>
                }
                intervalTimeTransPre={TIME_INTERVAL_TO_ANIMATED_SHAPES}
                intervalTimeTransPost={TIME_INTERVAL_TO_ANIMATED_SHAPES}
                startIndication={true}
              />
            }
            intervalTimeTransPre={TIME_INTERVAL_TO_ANIMATED_SHAPES}
            intervalTimeTransPost={TIME_INTERVAL_TO_ANIMATED_SHAPES}
            startIndication={true}
          />
        }
        interval={TIME_INTERVAL_TO_ANIMATED_SHAPES * 5}
        delay={0}
      />
    );
  };

  const _renderAnimatedContent2 = () => {
    return (
      <InfiniteRender
        renderComponent={
          <ShowUpWithJumpscareEfect
            graphicPre={
              <div
                className={styles.animatedContainer2}
                style={{ backgroundColor: "rgb(255 189 89)" }}
              ></div>
            }
            graphicTrans={
              <div
                className={styles.animatedContainer2}
                style={{ backgroundColor: "rgb(56 255 53)" }}
              ></div>
            }
            graphicPost={
              <ShowUpWithJumpscareEfect
                graphicPre={
                  <div
                    className={styles.animatedContainer2}
                    style={{ backgroundColor: "rgb(110 248 255)" }}
                  ></div>
                }
                graphicTrans={
                  <div
                    className={styles.animatedContainer2}
                    style={{ backgroundColor: "rgb(242 173 255)" }}
                  ></div>
                }
                graphicPost={
                  <div
                    className={styles.animatedContainer2}
                    style={{ backgroundColor: "rgb(255 126 162)" }}
                  ></div>
                }
                intervalTimeTransPre={TIME_INTERVAL_TO_ANIMATED_SHAPES}
                intervalTimeTransPost={TIME_INTERVAL_TO_ANIMATED_SHAPES}
                startIndication={true}
              />
            }
            intervalTimeTransPre={TIME_INTERVAL_TO_ANIMATED_SHAPES}
            intervalTimeTransPost={TIME_INTERVAL_TO_ANIMATED_SHAPES}
            startIndication={true}
          />
        }
        interval={TIME_INTERVAL_TO_ANIMATED_SHAPES * 5}
        delay={0}
      />
    );
  };

  return (
    <div className={styles.container}>
      {/* LOGO SECTION */}
      <div className={styles.logoContainer}>
        <img src={logoImg} alt="Logo" className={styles.logo} />
        <div className={styles.txtContainer}>
          <InfiniteRender
            renderComponent={
              <ShowUpWithJumpscareEfect
                graphicPre={<div className={styles.logoTxt}>/kmakatsoris</div>}
                graphicTrans={<div className={styles.logoTxt}>Loading...</div>}
                graphicPost={<div className={styles.logoTxt}>/kmakatsoris</div>}
                intervalTimeTransPre={TIME_INTERVAL_TO_LOGO_TXT}
                intervalTimeTransPost={TIME_INTERVAL_TO_LOGO_TXT}
                startIndication={true}
              />
            }
            interval={TIME_INTERVAL_TO_LOGO_TXT * 2}
            delay={0}
          />
        </div>
      </div>

      {/* SHAPES SECTION */}
      {props.enShapes && _renderAnimatedContent0()}
      {props.enShapes && _renderAnimatedContent1()}
      {props.enShapes && _renderAnimatedContent2()}

      {/* QUOTES SECTION */}
      {props.enQuotes &&
        quotes.map((q: string, idx: number) => {
          return _renderingQuote(q, `quote${idx}`);
        })}

      {/** Code Execution */}
      <InfiniteRender
        renderComponent={
          <div
            className={styles.codeDisplay}
            style={{ top: "calc(60% - 300px)", left: "80%" }}
          >
            <CodeDisplay
              codes={codeExamples}
              interval={100}
              width="300px"
              height="250px"
            />
          </div>
        }
        interval={100 * (codeExamples.length + 1)}
        delay={0}
      />
      <InfiniteRender
        renderComponent={
          <div
            className={styles.codeDisplay}
            style={{ top: "calc(70% - 350px)", left: "1%" }}
          >
            <CodeDisplay
              codes={codeExamples}
              interval={100}
              width="300px"
              height="300px"
            />
          </div>
        }
        interval={100 * (codeExamples.length + 1)}
        delay={0}
      />
      <InfiniteRender
        renderComponent={
          <div
            className={styles.codeDisplay}
            style={{ top: "calc(100% - 180px)", left: "75%" }}
          >
            <CodeDisplay
              codes={codeExamples}
              interval={100}
              width="300px"
              height="100px"
            />
          </div>
        }
        interval={100 * (codeExamples.length + 1)}
        delay={0}
      />
    </div>
  );
};

export default LoadingPage;
