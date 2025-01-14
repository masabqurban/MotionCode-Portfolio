import React, { useEffect, useRef, useState } from "react";
import { Engine, Render, World, Bodies, Runner, Body, Events, Mouse, Common } from "matter-js";

const RealisticFollowShapes = ({ theme }) => {
  const sceneRef = useRef(null);
  const engineRef = useRef(Engine.create());
  const mousePosition = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  const [shapeColors, setShapeColors] = useState({
    polygonColor: theme === 'light' ? '#c7c7c7' : '#222222',
    circle1Color: theme === 'light' ? '#dec663' : '#27292d',
    circle2Color: theme === 'light' ? '#74d7ce' : '#334443',
    circle3Color: theme === 'light' ? '#a0d490' : '#191919',
    strokeColor: theme === 'light' ? '#fff' : '#000' // Define stroke color
  });

  useEffect(() => {
    setShapeColors({
      polygonColor: theme === 'light' ? '#c7c7c7' : '#222222',
      circle1Color: theme === 'light' ? '#dec663' : '#27292d',
      circle2Color: theme === 'light' ? '#74d7ce' : '#334443',
      circle3Color: theme === 'light' ? '#a0d490' : '#191919',
      strokeColor: theme === 'light' ? '#fff' : '#000', // Update stroke color when theme changes
    });
  }, [theme]);

  useEffect(() => {
    const engine = engineRef.current;
    engine.world.gravity.y = 0; // Disable gravity

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent",
      },
    });

    const mouseCircle = Bodies.circle(window.innerWidth / 2, window.innerHeight / 2, 40, {
      isStatic: true,
      render: {
        fillStyle: theme == 'light' ? "#176e98" : '#000',
      },
    });

    const shapes = [];
    for (let i = 0; i < 60; i++) {
      const x = Common.random(0, render.options.width);
      const y = Common.random(0, render.options.height);
      const size = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
      const polygonNumber = Common.random(3, 6);

      // Create polygon shape with dynamic color
      const polygon = Bodies.polygon(x, y, polygonNumber, size, {
        mass: size / 20,
        friction: 0,
        frictionAir: 0.02,
        angle: Math.round(Math.random() * 360),
        render: {
          fillStyle: shapeColors.polygonColor,
          strokeStyle: shapeColors.strokeColor, // Use strokeColor from state
          lineWidth: 2,
        },
      });

      shapes.push(polygon);

      // Create circles with dynamic color
      const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
        mass: 0.1,
        friction: 0,
        frictionAir: 0.01,
        render: {
          fillStyle: shapeColors.circle1Color,
          strokeStyle: shapeColors.strokeColor, // Use strokeColor from state
          lineWidth: 2,
        },
      });

      shapes.push(circle1);

      const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
        mass: 6,
        friction: 0,
        frictionAir: 0,
        render: {
          fillStyle: shapeColors.circle2Color,
          strokeStyle: shapeColors.strokeColor, // Use strokeColor from state
          lineWidth: 4,
        },
      });

      shapes.push(circle2);

      const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
        mass: 0.2,
        friction: 0.6,
        frictionAir: 0.8,
        render: {
          fillStyle: shapeColors.circle3Color,
          strokeStyle: shapeColors.strokeColor, // Use strokeColor from state
          lineWidth: 3,
        },
      });

      shapes.push(circle3);
    }

    // Add shapes to the world
    World.add(engine.world, [mouseCircle, ...shapes]);

    // Mouse tracking logic
    const updateMousePosition = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener("mousemove", updateMousePosition);

    // Spring-damping and inertia system
    Events.on(engine, "beforeUpdate", () => {
      Body.setPosition(mouseCircle, mousePosition.current);

      shapes.forEach((shape) => {
        const dx = mousePosition.current.x - shape.position.x;
        const dy = mousePosition.current.y - shape.position.y;

        // Distance between the shape and the mouse
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Spring force (weakened to stabilize movement)
        const springForceMagnitude = Math.min(0.0005, distance * 0.0005);
        const force = {
          x: (dx / distance) * springForceMagnitude,
          y: (dy / distance) * springForceMagnitude,
        };

        // Apply the spring force
        Body.applyForce(shape, shape.position, force);

        // Limit the speed of the shape
        const { x: vx, y: vy } = shape.velocity;
        const speed = Math.sqrt(vx * vx + vy * vy);
        if (speed > shape.maxSpeed) {
          Body.setVelocity(shape, {
            x: (vx / speed) * shape.maxSpeed,
            y: (vy / speed) * shape.maxSpeed,
          });
        }
      });
    });

    // Add mouse control for the attractor body
    const mouse = Mouse.create(render.canvas);
    const attractiveBody = Bodies.circle(render.options.width / 2, render.options.height / 2, 0, {
      isStatic: true,
      render: {
        fillStyle: "#000",
        strokeStyle: "#000",
        lineWidth: 0,
      },
      plugin: {
        attractors: [
          (bodyA, bodyB) => ({
            x: (bodyA.position.x - bodyB.position.x) * 1e-6,
            y: (bodyA.position.y - bodyB.position.y) * 1e-6,
          }),
        ],
      },
    });

    World.add(engine.world, attractiveBody);

    Events.on(engine, "afterUpdate", () => {
      if (!mouse.position.x) return;
      Body.translate(attractiveBody, {
        x: (mouse.position.x - attractiveBody.position.x) * 0.12,
        y: (mouse.position.y - attractiveBody.position.y) * 0.12,
      });
    });

    // Initialize and run the engine
    const runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      Render.stop(render);
      World.clear(engine.world);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [shapeColors]); // Re-run when shapeColors change

  return <div ref={sceneRef} />;
};

export default RealisticFollowShapes;
